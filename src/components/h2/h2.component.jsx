import './h2.styles.scss';

export const H2 = function ({children, color}) {
    return (
        <h2 style={{color}} className="h2">{children}</h2>
    );
}