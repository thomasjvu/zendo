import { SiDiscord, SiTwitter, SiTwitch, SiSoundcloud } from "react-icons/si";
import { Link } from "react-router-dom";
import Music from "./Music";

function Footer() {
    return (
        <footer>
            <section class="main-footer">
                <h4 className="credits">
                    <Link to="/">Credits</Link>
                </h4>
                <section className="social-links">
                    <a href="https://discord.com" target="_blank">
                        <SiDiscord className="social-icon" />
                    </a>
                    <a href="https://twitter.com" target="_blank">
                        <SiTwitter className="social-icon" />
                    </a>
                    <a href="https://twitch.tv" target="_blank">
                        <SiTwitch className="social-icon" />
                    </a>
                    <a href="https://soundcloud.com" target="_blank">
                        <SiSoundcloud className="social-icon" />
                    </a>
                </section>
            </section>
            <section class="sub-footer">
                <Music url="../src/assets/shizima-2.mp3" />
            </section>
        </footer>
    );
}

export default Footer;
