'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import { getAllBlogs } from '@/lib/blogs';
import './BlogSection.css';

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllBlogs()
      .then((data) => setBlogs(data))
      .catch(() => setBlogs([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading || blogs.length === 0) return null;

  return (
    <section id="blog" className="section blog-section">
      <div className="container">
        <SectionHeading
          tag="From Our Blog"
          title="Latest Insights & Updates"
          subtitle="Stay informed with our latest thoughts on design, development, and digital strategy."
        />
      </div>

      <div className="blog-section__scroll-area">
        <div className="blog-section__track">
          {blogs.map((blog) => {
            const dateStr = blog.date
              ? new Date(blog.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })
              : '';

            return (
              <article key={blog.id} className="blog-section__card">
                <div className="blog-section__card-img">
                  {blog.thumbnail ? (
                    <img src={blog.thumbnail} alt={blog.title} />
                  ) : (
                    <div className="blog-section__card-placeholder">
                      <i className="fa-solid fa-image"></i>
                    </div>
                  )}
                </div>
                <div className="blog-section__card-body">
                  {dateStr && <time className="blog-section__card-date">{dateStr}</time>}
                  <h4 className="blog-section__card-title">{blog.title}</h4>
                  {blog.metaDescription && (
                    <p className="blog-section__card-excerpt">{blog.metaDescription}</p>
                  )}
                  <Link href={`/blog/${blog.slug}`} className="blog-section__card-link">
                    Read more<span className="sr-only"> about {blog.title}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
