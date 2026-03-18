'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAllBlogs } from '@/lib/blogs';

export default function BlogContent({ blog }) {
  const [similarBlogs, setSimilarBlogs] = useState([]);

  const dateStr = blog.date
    ? new Date(blog.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    : '';

  useEffect(() => {
    getAllBlogs().then((all) => {
      const others = all.filter((b) => b.slug !== blog.slug).slice(0, 3);
      setSimilarBlogs(others);
    }).catch(() => { });
  }, [blog.slug]);
  // Prevent text wrapping issues by replacing non-breaking spaces with regular spaces
  const sanitizedContent = blog.content ? blog.content.replace(/&nbsp;/g, ' ') : '';

  return (
    <article className="blog-detail">
      {/* Header */}
      <div className="container">
        <div className="blog-detail__header">
          {dateStr && <time className="blog-detail__date">{dateStr}</time>}
          <h1 className="blog-detail__title">{blog.title}</h1>
        </div>

        {/* Thumbnail */}
        {blog.thumbnail && (
          <div className="blog-detail__thumbnail">
            <img src={blog.thumbnail} alt={blog.title} />
          </div>
        )}

        {/* Article body */}
        <div className="blog-detail__body">
          <div
            className="blog-detail__content"
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          />
        </div>
      </div>

      {/* CTA Banner */}
      <div className="blog-detail__cta">
        <div className="container">
          <div className="blog-detail__cta-inner">
            <h2 className="blog-detail__cta-title">Transform your vision into a digital reality</h2>
            <p className="blog-detail__cta-text">
              Partner with a team that cares about your success as much as you do.
            </p>
            <a
              href="https://form.typeform.com/to/eh6mbf1u"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-detail__cta-btn"
            >
              Book a free consultation
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Similar Blogs */}
      {similarBlogs.length > 0 && (
        <div className="blog-detail__similar">
          <div className="container">
            <h3 className="blog-detail__similar-title">Similar Blogs</h3>
            <div className="blog-detail__similar-grid">
              {similarBlogs.map((b) => (
                <Link key={b.id} href={`/blog/${b.slug}`} className="blog-detail__similar-card">
                  <div className="blog-detail__similar-img">
                    {b.thumbnail ? (
                      <img src={b.thumbnail} alt={b.title} />
                    ) : (
                      <div className="blog-detail__similar-placeholder">
                        <i className="fa-solid fa-image"></i>
                      </div>
                    )}
                  </div>
                  <div className="blog-detail__similar-body">
                    <span className="blog-detail__similar-date">
                      {b.date ? new Date(b.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : ''}
                    </span>
                    <h4>{b.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
