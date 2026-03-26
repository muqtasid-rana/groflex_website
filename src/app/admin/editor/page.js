'use client';

import { Suspense, useEffect, useState, useMemo, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { createBlog, updateBlog, getBlogById } from '@/lib/blogs';
import { storage } from '@/lib/firebase-admin';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });
import 'react-quill-new/dist/quill.snow.css';

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function EditorForm() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get('id');
  const fileInputRef = useRef(null);

  const [form, setForm] = useState({
    title: '',
    slug: '',
    content: '',
    thumbnail: '',
    date: new Date().toISOString().split('T')[0],
    metaDescription: '',
  });
  const [autoSlug, setAutoSlug] = useState(true);
  const [saving, setSaving] = useState(false);
  const [loadingBlog, setLoadingBlog] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [previewFile, setPreviewFile] = useState(null);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/admin/login');
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    if (editId && user) {
      setLoadingBlog(true);
      getBlogById(editId).then((blog) => {
        if (blog) {
          setForm({
            title: blog.title || '',
            slug: blog.slug || '',
            content: blog.content || '',
            thumbnail: blog.thumbnail || '',
            date: blog.date || new Date().toISOString().split('T')[0],
            metaDescription: blog.metaDescription || '',
          });
          setAutoSlug(false);
        }
        setLoadingBlog(false);
      });
    }
  }, [editId, user]);

  const handleChange = (field, value) => {
    setForm((prev) => {
      const next = { ...prev, [field]: value };
      if (field === 'title' && autoSlug) {
        next.slug = slugify(value);
      }
      return next;
    });
  };

  const handleSlugChange = (value) => {
    setAutoSlug(false);
    setForm((prev) => ({ ...prev, slug: slugify(value) }));
  };

  const handleFileSelect = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Show local preview immediately
    const localUrl = URL.createObjectURL(file);
    setPreviewFile(localUrl);

    // Upload to Firebase Storage
    setUploading(true);
    try {
      const timestamp = Date.now();
      const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
      const storageRef = ref(storage, `blog-thumbnails/${timestamp}_${safeName}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      setForm((prev) => ({ ...prev, thumbnail: downloadURL }));
    } catch (err) {
      alert('Failed to upload image: ' + err.message);
    } finally {
      setUploading(false);
    }
  };

  const removeThumbnail = () => {
    setForm((prev) => ({ ...prev, thumbnail: '' }));
    setPreviewFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.slug) {
      alert('Title and slug are required');
      return;
    }
    if (uploading) {
      alert('Please wait for the image to finish uploading');
      return;
    }
    setSaving(true);
    try {
      if (editId) {
        await updateBlog(editId, form);
      } else {
        await createBlog(form);
      }
      router.push('/admin');
    } catch (err) {
      alert('Failed to save: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  const quillModules = useMemo(() => ({
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['blockquote', 'code-block'],
      ['link', 'image'],
      ['clean'],
    ],
  }), []);

  if (authLoading || !user) return null;

  const displayThumb = previewFile || form.thumbnail;

  return (
    <div className="admin-editor">
      <div className="admin-editor__topbar">
        <h1>{editId ? 'Edit Post' : 'New Post'}</h1>
        <button type="button" onClick={() => router.push('/admin')} className="admin-dash__btn admin-dash__btn--ghost">
          Cancel
        </button>
      </div>

      {loadingBlog ? (
        <div className="admin-dash__loading">Loading blog data...</div>
      ) : (
        <form onSubmit={handleSubmit} className="admin-editor__form">
          <div className="admin-editor__main">
            <div className="admin-editor__field">
              <label>Title</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => handleChange('title', e.target.value)}
                placeholder="Enter blog title..."
                required
              />
            </div>

            <div className="admin-editor__field">
              <label>Slug</label>
              <input
                type="text"
                value={form.slug}
                onChange={(e) => handleSlugChange(e.target.value)}
                placeholder="url-friendly-slug"
                required
              />
            </div>

            <div className="admin-editor__field admin-editor__field--editor">
              <label>Content</label>
              <ReactQuill
                theme="snow"
                value={form.content}
                onChange={(val) => handleChange('content', val)}
                modules={quillModules}
                placeholder="Write your blog post content..."
              />
            </div>
          </div>

          <div className="admin-editor__sidebar">
            <div className="admin-editor__sidebar-card">
              <h3>Post Details</h3>

              <div className="admin-editor__field">
                <label>Date</label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => handleChange('date', e.target.value)}
                />
              </div>

              <div className="admin-editor__field">
                <label>Thumbnail</label>
                <div className="admin-editor__upload-area">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="admin-editor__file-input"
                    id="thumbnail-upload"
                  />
                  <label htmlFor="thumbnail-upload" className="admin-editor__upload-btn">
                    <i className="fa-solid fa-cloud-arrow-up"></i>
                    {uploading ? 'Uploading...' : 'Choose Image'}
                  </label>
                </div>
              </div>

              {displayThumb && (
                <div className="admin-editor__preview">
                  <img src={displayThumb} alt="Thumbnail preview" />
                  <button type="button" className="admin-editor__preview-remove" onClick={removeThumbnail}>
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                  {uploading && <div className="admin-editor__preview-loading">Uploading...</div>}
                </div>
              )}

              <div className="admin-editor__field">
                <label>Meta Description</label>
                <textarea
                  value={form.metaDescription}
                  onChange={(e) => handleChange('metaDescription', e.target.value)}
                  placeholder="Brief description for SEO..."
                  rows={3}
                />
              </div>

              <button type="submit" className="admin-editor__submit" disabled={saving || uploading}>
                {saving ? 'Saving...' : editId ? 'Update Post' : 'Publish Post'}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default function EditorPage() {
  return (
    <Suspense fallback={<div className="admin-dash__loading">Loading editor...</div>}>
      <EditorForm />
    </Suspense>
  );
}
