import './Button.css';

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    href,
    onClick,
    type = 'button',
    className = '',
    tallyConfig,
    ...props
}) {
    const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

    // Build Tally data attributes when tallyConfig is provided
    const tallyAttrs = tallyConfig
        ? {
            'data-tally-open': tallyConfig.formId,
            'data-tally-layout': tallyConfig.layout || 'modal',
            'data-tally-width': tallyConfig.width || 676,
            'data-tally-hide-title': tallyConfig.hideTitle ?? 1,
            'data-tally-auto-close': tallyConfig.autoClose || 1000,
        }
        : {};

    if (tallyConfig) {
        return (
            <button
                type="button"
                className={classes}
                onClick={onClick}
                {...tallyAttrs}
                {...props}
            >
                {children}
            </button>
        );
    }

    if (href) {
        return (
            <a href={href} className={classes} onClick={onClick} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} className={classes} onClick={onClick} {...props}>
            {children}
        </button>
    );
}
