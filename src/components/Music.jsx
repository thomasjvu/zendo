import { CgPlayButton, CgPlayPause, CgMusic } from "react-icons/cg";

function Music({url}) {

    let audio = new Audio(url)

    const start = () => {
        audio.play()
        audio.loop = true
    };

    const pause = () => {
        audio.pause()
    };

    return (
        <div className="music-buttons">
            <CgPlayButton onClick={start} className="music-button hover:text-white" />
            <CgPlayPause onClick={pause} className="music-button hover:text-white" />
        </div>
    )
}

export default Music;
