import './center.styles.scss';

export const Center = function ({children}) {
    return (
        <center className="center">
            {children}
        </center>
    );
}