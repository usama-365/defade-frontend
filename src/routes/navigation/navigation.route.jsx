import {Link, Outlet} from "react-router-dom";
import "./navigation.styles.scss";
import {Container} from "../../components/container/container.component";
import {Logo} from "../../components/logo/logo.component";
import {Button, BUTTON_STYLES} from "../../components/button/button.component";

export const Navigation = function () {
    return (
        <>
            <nav className="navigation">
                <Container className="navigation__container" limitWidth={false}>
                    <Link to="/"><Logo/></Link>
                    <ul className="navigation__links">
                        <li className="navigation__item"><a href="#" className="navigation__link">About Us</a></li>
                        <li className="navigation__item"><a href="#" className="navigation__link">Services</a></li>
                        <li className="navigation__item"><a href="#" className="navigation__link">Contact Us</a></li>
                    </ul>
                    <div className="navigation__buttons">
                        <Button buttonStyle={BUTTON_STYLES.accent}>Protect yourself now</Button>
                    </div>
                </Container>
            </nav>
            <Outlet/>
        </>
    );
}