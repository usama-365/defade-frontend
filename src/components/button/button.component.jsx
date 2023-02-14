import "./button.styles.scss";

export const BUTTON_STYLES = {
    black: "black",
    gray: "gray",
    accent: "accent",
    white: "white"
}

export const Button = function ({children, buttonStyle}) {
    return (
        <button className={`button button--${buttonStyle}`}>{children}</button>
    );
}