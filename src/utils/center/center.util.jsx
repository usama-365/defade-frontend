import './center.styles.scss';

export const Center = function ({children, className}) {
    return (
        <center className={`center ${className}`}>
            {children}
        </center>
    );
}