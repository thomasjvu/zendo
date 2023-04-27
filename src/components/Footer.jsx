import { useState } from "react";
import { CgCloseR } from "react-icons/cg";
import { Link } from "react-router-dom";
import Music from "./Music";
// import Socials from "./Socials";

function Footer() {
    const [isOpen, setIsOpen] = useState(false);

    const creditsToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <footer>
            <section className="main-footer">
                <h4 className="credits" onClick={creditsToggle}>
                    <Link to="/">Credits</Link>
                </h4>
                {isOpen && (
                    <div className="credits-modal">
                        <div className="credits-close-container">
                            <CgCloseR className="credits-close-button" onClick={creditsToggle} />
                        </div>
                        <h3 className="credits-heading">Credits</h3>
                        <p>
                            Designer:{" "}
                            <a href="https://github.com/thomasjvu" target="_blank">
                                @thomasjvu
                            </a>
                        </p>
                        <p>
                            Developer:{" "}
                            <a href="https://github.com/thomasjvu" target="_blank">
                                @thomasjvu
                            </a>
                        </p>
                        <p>
                            Music:{" "}
                            <a href="https://www.youtube.com/watch?v=enp4-L-HttE" target="_blank">
                                @Peritune
                            </a>
                        </p>
                        <p>
                            3D Model:{" "}
                            <a
                                href="https://sketchfab.com/3d-models/meditation-diorama-a8e5d404631348aab2a64046f9aaf263"
                                target="_blank"
                            >
                                @itsmeAllenUwU
                            </a>
                        </p>
                    </div>
                )}
            </section>
            {/* <Socials /> */}
            <section className="sub-footer">
                <Music url="https://res.cloudinary.com/dlcz9y0nv/video/upload/v1682559125/Zendo/shizima-2_iccwxb.mp3" />
            </section>
        </footer>
    );
}

export default Footer;
