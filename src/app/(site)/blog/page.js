import { getAllBlogs } from '@/lib/blogs';
import BlogList from './BlogList';
import './blog.css';

export const metadata = {
  title: 'Blog — Groflex',
  description: 'Insights, tutorials, and updates from the Groflex team on software development, design, and digital strategy.',
  openGraph: {
    title: 'Blog — Groflex',
    description: 'Insights, tutorials, and updates from the Groflex team on software development, design, and digital strategy.',
  },
};

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  let blogs = [];
  try {
    blogs = await getAllBlogs();
  } catch (e) {
    console.error('Failed to fetch blogs:', e);
  }

  return (
    <section className="blog-page">
      <div className="container">
        <div className="blog-page__header">
          <span className="blog-page__tag">Our Blog</span>
          <h1 className="blog-page__title">Insights & Updates</h1>
          <p className="blog-page__subtitle">
            Stay up-to-date with our latest thoughts on design, development, and digital strategy.
          </p>
        </div>
        <BlogList blogs={blogs} />
      </div>
    </section>
  );
}
