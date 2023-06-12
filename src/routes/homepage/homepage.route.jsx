import "./homepage.styles.scss";
import GroupMemberImage1 from "../../assets/us/1.jpg";
import GroupMemberImage2 from "../../assets/us/2.jpg";
import GroupMemberImage3 from "../../assets/us/3.jpg";
import {Button, Spinner} from "react-bootstrap";
import {Link} from "react-router-dom";



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
        <div className={"h-100 d-flex flex-column align-items-center justify-content-center"}>
            <h1 className={"text-primary"}>Deep Fake Detection</h1>
            <h4 className={"text-white mb-4"}>Unmasking deception, Empowering Security</h4>
            <Link to={"about"}>
                <Button
                    // className="d-flex align-items-center justify-content-center gap-4"
                    size={"lg"}
                    variant="dark">
                    <Spinner as={"span"} animation={"grow"} size={"sm"} variant={"primary"}/> Who we are?

                </Button>
            </Link>

        </div>
    );
}