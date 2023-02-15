import "./homepage.styles.scss";
import {Container} from "../../components/container/container.component";
import {Button, BUTTON_STYLES} from "../../components/button/button.component";
import {Checkmark} from "../../components/checkmark/checkmark.component";
import video from "../../assets/vid.mp4";
import {ProfileCard} from "../../components/profile-card/profile-card.component";
import GroupMemberImage1 from "../../assets/us/1.jpg";
import GroupMemberImage2 from "../../assets/us/2.jpg";
import GroupMemberImage3 from "../../assets/us/3.jpg";
import {H2} from "../../components/h2/h2.component";
import {Step} from "../../components/step/step.component";
import {Center} from "../../utils/center/center.util";

const aboutProfiles = [
    {
        name: "Muhammad Hamza",
        regNo: "1064",
        description: "Leader & Coordinator",
        image: GroupMemberImage1
    },
    {
        name: "Muhammad Hassan",
        regNo: "1065",
        description: "AI & ML Developer",
        image: GroupMemberImage2
    },
    {
        name: "M. Usama Arif",
        regNo: "1069",
        description: "Web & Mobile Developer",
        image: GroupMemberImage3
    }
];

const steps = [
    {
        title: "Upload",
        description: "Upload your video on our servers"
    },
    {
        title: "Wait",
        description: "Wait for our algorithm to process your video"
    },
    {
        title: "Done",
        description: `You'll be informed of the authenticity of video`
    }
]

export const Homepage = function () {
    return (
        <>
            <section className="hero" id="hero">
                <Container className="hero__grid">
                    <div className="hero__left">
                        <h1 className="hero__text">Don't be fooled by <span
                            className="hero__text--white">Deep Fakes</span></h1>
                        <ul className="hero__subtext">
                            <Checkmark>Unmask deep fakes</Checkmark>
                            <Checkmark>Protect your identity</Checkmark>
                            <Checkmark>Get services in second</Checkmark>
                        </ul>
                        <Button large={true}>PROTECT YOURSELF NOW</Button>
                    </div>
                    <div className="hero__right">
                        <video className="hero__video" loop={true} autoPlay={true} muted={true} src={video}></video>
                    </div>
                </Container>
            </section>
            <section className="cta" id="cta">
                <Container>
                    <Center>
                        <H2>Protect yourself today</H2>
                        <Button large={true} buttonStyle={BUTTON_STYLES.accent}>Analyze video</Button>
                    </Center>
                </Container>
            </section>
            <section className="how" id="how">
                <Container>
                    <H2>How it works</H2>
                    <div className="how__grid">
                        {steps.map(({title, description}, index) => (
                            <Step description={description} title={title} number={
                                (index + 1).toLocaleString("en-US", {minimumIntegerDigits: 2})
                            }/>
                        ))}
                    </div>
                </Container>
            </section>
            <section className="about" id="about">
                <Container>
                    <H2>About Us</H2>
                    <div className="about__grid">
                        {aboutProfiles.map(({name, regNo, description, image}) => (
                            <ProfileCard name={name} regNo={regNo} description={description} image={image}/>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}