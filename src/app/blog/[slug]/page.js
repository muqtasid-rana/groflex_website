import { getAllBlogs, getBlogBySlug } from '@/lib/blogs';
import { notFound } from 'next/navigation';
import BlogContent from './BlogContent';
import './blogDetail.css';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) return { title: 'Post Not Found' };
  return {
    title: `${blog.title} — Groflex Blog`,
    description: blog.metaDescription || blog.title,
    openGraph: {
      title: `${blog.title} — Groflex Blog`,
      description: blog.metaDescription || blog.title,
      type: 'article',
      ...(blog.thumbnail && { images: [{ url: blog.thumbnail }] }),
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) notFound();

  return <BlogContent blog={blog} />;
}
