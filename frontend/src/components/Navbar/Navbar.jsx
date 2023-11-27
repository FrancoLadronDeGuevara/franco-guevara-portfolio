import "./Navbar.css";
import speakerOn from "../../assets/icons/speakerON.png";
import speakerOff from "../../assets/icons/speakerOFF.png";
import soundtrack from "../../assets/sounds/soundtrack.mp3"
import { useRef, useState } from "react";

export default function Navbar() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audio = useRef(null);

    const handleMusic = () => {
        if (!isPlaying) {
            audio.current = new Audio(soundtrack);
            audio.current.play();
        } else {
            audio.current.pause();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <>
            <div className="container-navbar">
                <div className="container-soundtrack" onClick={handleMusic}>
                    {isPlaying? <img src={speakerOff} alt="Image speaker Off"/> : <img src={speakerOn} alt="Image speaker On"/>}
                </div>
                <div className="btn-navbar">
                    <button><i className="nes-jp-logo"></i></button>
                </div>
            </div>
        </>
    )
}