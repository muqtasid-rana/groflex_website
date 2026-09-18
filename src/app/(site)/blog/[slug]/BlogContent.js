import Link from 'next/link';
import Image from 'next/image';

export default function BlogContent({ blog, similarBlogs }) {
  const dateStr = blog.date
    ? new Date(blog.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    : '';

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
            {/* width/height only set the placeholder ratio; CSS keeps the image's own aspect */}
            <Image
              src={blog.thumbnail}
              alt={blog.title}
              width={1200}
              height={630}
              sizes="(max-width: 900px) 100vw, 900px"
              priority
            />
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
            <Link href="/gameplan" className="blog-detail__cta-btn">
              Get your free GAMEPLAN
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
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
                      <Image
                        src={b.thumbnail}
                        alt={b.title}
                        fill
                        sizes="(max-width: 700px) 100vw, 380px"
                      />
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
