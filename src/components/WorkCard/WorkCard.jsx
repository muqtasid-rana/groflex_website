import Link from 'next/link';
import Image from 'next/image';
import './WorkCard.css';

export default function WorkCard({
    name,
    category,
    description,
    image,
    imagePosition,
    href,
    color,
    sizes = '(max-width: 600px) 100vw, 50vw',
    priority = false,
    className = '',
}) {
    return (
        <Link href={href} className={`work-card ${className}`.trim()}>
            <div className="work-card__media" style={{ backgroundColor: color }}>
                <Image
                    src={image}
                    alt=""
                    fill
                    sizes={sizes}
                    priority={priority}
                    placeholder="blur"
                    className="work-card__img"
                    style={{ objectPosition: imagePosition }}
                />
            </div>
            <div className="work-card__body">
                <div className="work-card__head">
                    <h3 className="work-card__name">{name}</h3>
                    <span className="work-card__category">{category}</span>
                </div>
                {/* Collapsed until hover; the surrounding layout decides which picture compresses to make room */}
                <div className="work-card__reveal">
                    <p className="work-card__desc">{description}</p>
                    <span className="work-card__btn">
                        View case study
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </span>
                </div>
            </div>
        </Link>
    );
}
