import {Link} from "react-router-dom";
import "./navigation.styles.scss";
import {Container} from "../../components/container/container.component";
import {Logo} from "../../components/logo/logo.component";
import {Button, BUTTON_STYLES} from "../../components/button/button.component";

export const Navigation = function () {
    return (
        <nav className="navigation">
            <Container className="navigation__container" limitWidth={false}>
                <a href="#hero"><Logo/></a>
                <ul className="navigation__links">
                    <li className="navigation__item"><a href="#how" className="navigation__link">How it works</a></li>
                    <li className="navigation__item"><a href="#about" className="navigation__link">about us</a></li>
                    <Button buttonStyle={BUTTON_STYLES.accent}>Protect yourself now</Button>
                </ul>
            </Container>
        </nav>
    );
}