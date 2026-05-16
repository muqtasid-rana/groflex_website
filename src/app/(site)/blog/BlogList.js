'use client';

import Link from 'next/link';

export default function BlogList({ blogs }) {
  if (!blogs || blogs.length === 0) {
    return (
      <div className="blog-page__empty">
        <div className="blog-page__empty-icon">
          <i className="fa-solid fa-pen-nib"></i>
        </div>
        <h3>No blog posts yet</h3>
        <p>Check back soon — we&apos;re working on some great content!</p>
      </div>
    );
  }

  return (
    <div className="blog-page__grid">
      {blogs.map((blog) => {
        const dateStr = blog.date
          ? new Date(blog.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
          : '';
        return (
          <article key={blog.id} className="blog-card">
            <div className="blog-card__image">
              {blog.thumbnail ? (
                <img src={blog.thumbnail} alt={blog.title} />
              ) : (
                <div className="blog-card__placeholder">
                  <i className="fa-solid fa-image"></i>
                </div>
              )}
            </div>
            <div className="blog-card__content">
              {dateStr && <time className="blog-card__date">{dateStr}</time>}
              <h3 className="blog-card__title">{blog.title}</h3>
              {blog.metaDescription && (
                <p className="blog-card__excerpt">{blog.metaDescription}</p>
              )}
              <Link href={`/blog/${blog.slug}`} className="blog-card__link">
                Read Blog
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
