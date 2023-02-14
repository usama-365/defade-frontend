import "./homepage.styles.scss";
import {Container} from "../../components/container/container.component";
import {Button} from "../../components/button/button.component";
import {Checkmark} from "../../components/checkmark/checkmark.component";
import video from '../../assets/vid.mp4';

export const Homepage = function () {
    return (
        <>
            <section className="hero">
                <Container className="hero__grid">
                    <div className="hero__left">
                        <h1 className="hero__text">Don't be fooled by <span className="hero__text--white">Deep Fakes</span></h1>
                        <ul className="hero__subtext">
                                <Checkmark>Unmask deep fakes</Checkmark>
                                <Checkmark>Protect your identity</Checkmark>
                                <Checkmark>Get services in second</Checkmark>
                            </ul>
                        <Button large={true}>PROTECT YOURSELF NOW</Button>
                    </div>
                    <div className="hero__right">
                        <video className="hero__video" loop={true} autoPlay={true}  muted={true} src={video}></video>
                    </div>
                </Container>
            </section>
        </>
    );
}