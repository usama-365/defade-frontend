import "./footer.styles.scss";
import {Logo} from "../../components/logo/logo.component";

export const Footer = function () {
    return (
        <footer className="footer">
            <Logo className="footer__logo" large={true}/>
            <div className="footer__side-by-side">
                <div className="footer__left">
                    <ul className="footer__links">
                        <li className="footer__item"><a href="#hero" className="footer__link">Home</a></li>
                        <li className="footer__item"><a href="#how" className="footer__link">How it works</a></li>
                        <li className="footer__item"><a href="#about" className="footer__link">About Us</a></li>
                        <li className="footer__item">
                            <a href="#cta" className="footer__link">PROTECT YOURSELF NOW</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__right">
                    <p className="footer__text">&copy; Developed by FYP group 103</p>
                </div>
            </div>
        </footer>
    );
};