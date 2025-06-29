import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import soundtrack from "@/assets/sounds/soundtrack.mp3";
import musicIcon from "@/assets/icons/sound.png";

const Music = () => {
    const { t } = useTranslation();
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
        <div className="music-container">
            <button className="nes-btn is-primary icon-button" onClick={handleMusic}>
                <img src={musicIcon} width="20px" alt="music icon" onClick={handleMusic} />
            </button>
            <div className="radio-container">
                <label>
                    <input type="radio" className="nes-radio" name="music" onChange={handleMusic} checked={isPlaying} />
                    <span>{t("navbar.yes")}</span>
                </label>

                <label>
                    <input type="radio" className="nes-radio" name="music" onChange={handleMusic} checked={!isPlaying} />
                    <span>{t("navbar.no")}</span>
                </label>
            </div>
        </div>
    )
}

export default Music