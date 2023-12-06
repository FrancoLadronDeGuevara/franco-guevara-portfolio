import "./Navbar.css";
import speakerOn from "../../assets/icons/speakerON.png";
import speakerOff from "../../assets/icons/speakerOFF.png";
import menuOpen from "../../assets/icons/menuOPEN.png";
import menuClose from "../../assets/icons/menuCLOSE.png";
import soundtrack from "../../assets/sounds/soundtrack.mp3";
import { useRef, useState } from "react";
import CharacterButton from "../CharacterButton/CharacterButton";

export default function Navbar({ unlockedCharacters, onCharacterUnlock }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

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
                    {isPlaying ? <img src={speakerOff} alt="Image speaker Off" /> : <img src={speakerOn} alt="Image speaker On" />}
                </div>
                <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                    <p>Find all 10 <CharacterButton hidingIn="characters" onCharacterUnlock={onCharacterUnlock} />!</p>
                    <hr />
                    <div className="menu-characters">
                        {
                            unlockedCharacters.map((char, index) => (
                                <div key={index}>
                                    <img className="character-image" src={char.img} alt={`${char.name} Image`} />
                                </div>
                            ))
                        }
                    </div>

                </div>
                {
                    isMenuOpen ?
                        (<img src={menuClose} alt="" className="menu-button" onClick={toggleMenu} />)
                        :
                        (<img src={menuOpen} alt="" className="menu-button" onClick={toggleMenu} />)
                }

            </div>
        </>
    )
}