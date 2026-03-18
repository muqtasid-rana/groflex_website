'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { getAllBlogs, deleteBlog } from '@/lib/blogs';
import Link from 'next/link';

export default function AdminDashboard() {
  const { user, loading: authLoading, logout } = useAuth();
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/admin/login');
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    if (user) {
      fetchBlogs();
    }
  }, [user]);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const data = await getAllBlogs();
      setBlogs(data);
    } catch (err) {
      console.error('Failed to fetch blogs:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, title) => {
    if (!window.confirm(`Delete "${title}"? This cannot be undone.`)) return;
    try {
      await deleteBlog(id);
      setBlogs(blogs.filter((b) => b.id !== id));
    } catch (err) {
      alert('Failed to delete blog: ' + err.message);
    }
  };

  const handleLogout = async () => {
    await logout();
    router.push('/admin/login');
  };

  if (authLoading || !user) return null;

  return (
    <div className="admin-dash">
      <div className="admin-dash__topbar">
        <h1 className="admin-dash__title">Blog Manager</h1>
        <div className="admin-dash__actions-top">
          <Link href="/admin/editor" className="admin-dash__btn admin-dash__btn--primary">
            <i className="fa-solid fa-plus"></i> New Post
          </Link>
          <button onClick={handleLogout} className="admin-dash__btn admin-dash__btn--ghost">
            <i className="fa-solid fa-right-from-bracket"></i> Logout
          </button>
        </div>
      </div>

      {loading ? (
        <div className="admin-dash__loading">Loading blogs...</div>
      ) : blogs.length === 0 ? (
        <div className="admin-dash__empty">
          <i className="fa-solid fa-pen-nib"></i>
          <h3>No blogs yet</h3>
          <p>Create your first blog post to get started.</p>
          <Link href="/admin/editor" className="admin-dash__btn admin-dash__btn--primary">
            Create First Post
          </Link>
        </div>
      ) : (
        <div className="admin-dash__table-wrap">
          <table className="admin-dash__table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Slug</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id}>
                  <td className="admin-dash__td-title">{blog.title}</td>
                  <td className="admin-dash__td-slug">{blog.slug}</td>
                  <td className="admin-dash__td-date">
                    {blog.date ? new Date(blog.date).toLocaleDateString() : '—'}
                  </td>
                  <td className="admin-dash__td-actions">
                    <Link href={`/admin/editor?id=${blog.id}`} className="admin-dash__action-btn admin-dash__action-btn--edit">
                      <i className="fa-solid fa-pen"></i>
                    </Link>
                    <Link href={`/blog/${blog.slug}`} target="_blank" className="admin-dash__action-btn admin-dash__action-btn--view">
                      <i className="fa-solid fa-eye"></i>
                    </Link>
                    <button onClick={() => handleDelete(blog.id, blog.title)} className="admin-dash__action-btn admin-dash__action-btn--delete">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
