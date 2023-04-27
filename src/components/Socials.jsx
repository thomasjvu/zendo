import { SiDiscord, SiTwitter, SiTwitch, SiSoundcloud } from "react-icons/si";

function Socials() {
    return (
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
    );
}

export default Socials;
