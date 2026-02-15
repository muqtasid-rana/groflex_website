import './SectionHeading.css';

export default function SectionHeading({
    tag,
    title,
    subtitle,
    align = 'center',
    light = false,
}) {
    return (
        <div className={`section-heading section-heading--${align} ${light ? 'section-heading--light' : ''}`}>
            {tag && <span className="section-heading__tag">{tag}</span>}
            <h2 className="section-heading__title">{title}</h2>
            {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
        </div>
    );
}
