import './Quote.css';

export default function Quote({ text, author, dark = true }) {
    return (
        <section className={`section quote ${dark ? 'quote--dark' : ''}`}>
            <div className="quote__glow quote__glow--1" />
            <div className="quote__glow quote__glow--2" />
            <div className="container">
                <div className="quote__content">
                    <div className="quote__icon">&ldquo;</div>
                    <blockquote className="quote__text">
                        {text}
                    </blockquote>
                    {author && (
                        <cite className="quote__author">
                            <span className="quote__author-line" />
                            {author}
                        </cite>
                    )}
                </div>
            </div>
        </section>
    );
}
