import "./button.styles.scss";

export const BUTTON_STYLES = {
    black: "black",
    gray: "gray",
    accent: "accent",
    white: "white"
}

export const Button = function ({children, buttonStyle=BUTTON_STYLES.accent, large=false}) {
    return (
        <button className={`button button--${buttonStyle} ${large && 'button--large'}`}>{children}</button>
    );
}