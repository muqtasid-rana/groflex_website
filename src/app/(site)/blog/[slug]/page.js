import { getAllBlogs, getBlogBySlug } from '@/lib/blogs';
import { notFound } from 'next/navigation';
import BlogContent from './BlogContent';
import JsonLd from '@/components/JsonLd/JsonLd';
import { pageMetadata, articleJsonLd, breadcrumbJsonLd } from '@/lib/seo';
import './blogDetail.css';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) return { title: 'Post Not Found' };
  const meta = pageMetadata({
    title: `${blog.title} — Groflex Blog`,
    description: blog.metaDescription || blog.title,
    path: `/blog/${slug}`,
    type: 'article',
    ...(blog.thumbnail && { images: [{ url: blog.thumbnail, alt: blog.title }] }),
  });
  return {
    ...meta,
    openGraph: {
      ...meta.openGraph,
      ...(blog.date && { publishedTime: blog.date }),
      ...(blog.updatedAt && { modifiedTime: blog.updatedAt }),
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const [blog, allBlogs] = await Promise.all([
    getBlogBySlug(slug),
    getAllBlogs().catch(() => []),
  ]);
  if (!blog) notFound();

  // Fetched here rather than in the browser so the page doesn't ship the Firestore SDK
  const similarBlogs = allBlogs.filter((b) => b.slug !== slug).slice(0, 3);

  const path = `/blog/${slug}`;

  return (
    <>
      <BlogContent blog={blog} similarBlogs={similarBlogs} />
      <JsonLd
        data={articleJsonLd({
          title: blog.title,
          description: blog.metaDescription || blog.title,
          path,
          image: blog.thumbnail,
          datePublished: blog.date,
          dateModified: blog.updatedAt,
        })}
      />
      <JsonLd data={breadcrumbJsonLd([{ name: 'Blog', path: '/blog' }, { name: blog.title, path }])} />
    </>
  );
}
