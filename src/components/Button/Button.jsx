import './Button.css';

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    href,
    onClick,
    type = 'button',
    className = '',
}) {
    const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

    if (href) {
        return (
            <a href={href} className={classes} onClick={onClick}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} className={classes} onClick={onClick}>
            {children}
        </button>
    );
}
