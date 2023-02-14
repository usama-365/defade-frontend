import "./container.styles.scss";

export const Container = function ({children, className, limitWidth=true}) {
    return (
        <div className={`container ${limitWidth ? 'container--limit-width' : ''} ${className}`}>{children}</div>
    );
}