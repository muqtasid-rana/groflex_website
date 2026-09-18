import Link from 'next/link';
import Image from 'next/image';
import LineIcon from '@/components/LineIcon/LineIcon';

const formatDate = (date) =>
  date ? new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '';

// Latest posts, fetched on the server by the page so they're in the first HTML
export default function AgencyBlog({ blogs }) {
  if (!blogs?.length) return null;

  return (
    <section id="blog" className="ah-section ah-blog">
      <div className="container">
        <header className="ah-head ah-head--split">
          <div>
            <p className="ah-eyebrow">From the blog</p>
            <h2 className="ah-head__title">Latest <em>insights</em></h2>
          </div>
          <Link href="/blog" className="ah-link">
            Read the blog <LineIcon name="arrowRight" size={18} />
          </Link>
        </header>

        <ul className="ah-blog__grid">
          {blogs.slice(0, 3).map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.slug}`} className="ah-post">
                <div className="ah-post__img">
                  {blog.thumbnail && (
                    <Image src={blog.thumbnail} alt="" fill sizes="(max-width: 760px) 100vw, (max-width: 1000px) 50vw, 360px" />
                  )}
                </div>
                <div className="ah-post__body">
                  {blog.date && <time className="ah-post__date" dateTime={blog.date}>{formatDate(blog.date)}</time>}
                  <h3 className="ah-post__title">{blog.title}</h3>
                  {blog.metaDescription && <p className="ah-post__excerpt">{blog.metaDescription}</p>}
                  <span className="ah-post__more">
                    Read article <LineIcon name="arrowRight" size={16} strokeWidth={2} />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
