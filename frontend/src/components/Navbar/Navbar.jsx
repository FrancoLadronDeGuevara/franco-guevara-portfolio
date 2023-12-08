import "./Navbar.css";
import soundtrack from "../../assets/sounds/soundtrack.mp3";
import CharacterButton from "../CharacterButton/CharacterButton";
import questionIcon from "../../assets/icons/question.png";
import { useRef, useState } from "react";
import Hints from "../Hints/Hints";

export default function Navbar({ unlockedCharacters, onCharacterUnlock, characters }) {
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
            <div className="container-navbar nes-container is-rounded">
                <div className="container-soundtrack" onClick={handleMusic}>
                    {isPlaying ? <span>Music: ON</span> : <span>Music: OFF</span>}
                </div>
                <div className={`menu ${isMenuOpen ? 'open nes-container is-rounded' : ''}`}>
                    {
                        unlockedCharacters.length == 10 ?
                            (<p>You found all! Congrats!</p>)
                            :
                            (<p>Find all 10 <CharacterButton hidingIn="characters" onCharacterUnlock={onCharacterUnlock} />!</p>)
                    }
                    <hr />
                    <div className="container-menu-characters">
                        <div className="menu-characters">
                            {characters.map((char, index) => (
                                <div key={index} style={{ filter: unlockedCharacters.some((unlockedChar) => unlockedChar.hidingIn === char.hidingIn) ? 'contrast(100%)' : 'contrast(0%)' }}>
                                    <img className="character-image" src={char.img} alt={`${char.name} Image`} />
                                </div>
                            ))}
                        </div>

                        <Hints/>
                    </div>
                </div>
                {
                    isMenuOpen ?
                        <span className="menu-text" onClick={toggleMenu}>PAUSED</span>
                        :
                        <span className="menu-text" onClick={toggleMenu}>MENU</span>
                }

            </div>
        </>
    )
}