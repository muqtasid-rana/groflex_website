import './Browser.css';

// A minimal browser window around a web product's screenshot or screen recording
export default function Browser({ url, children, className = '' }) {
    return (
        <div className={`cs-browser ${className}`.trim()}>
            <div className="cs-browser__bar">
                <span className="cs-browser__dots"><i /><i /><i /></span>
                <span className="cs-browser__url">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="5" y="10.5" width="14" height="10" rx="2" />
                        <path d="M8 10.5v-3a4 4 0 0 1 8 0v3" />
                    </svg>
                    {url}
                </span>
            </div>
            <div className="cs-browser__screen">{children}</div>
        </div>
    );
}
