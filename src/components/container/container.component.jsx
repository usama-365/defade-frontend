import "./container.styles.scss";

export const Container = function ({children, className}) {
    return (
        <div className={`container ${className}`}>{children}</div>
    );
}