import "./Navbar.css";
import { useRef, useState } from "react";
import soundtrack from "../../assets/sounds/soundtrack.mp3";
import CharacterButton from "../CharacterButton/CharacterButton";

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
                <div className={`menu ${isMenuOpen && 'open nes-container is-rounded'}`}>
                    {
                        unlockedCharacters.length == 12 ?
                            (<p>You found all! Congrats!</p>)
                            :
                            (<p>Find all 12 <CharacterButton hidingIn="characters" onCharacterUnlock={onCharacterUnlock} />!</p>)
                    }
                    <hr />
                    <div className="menu-characters">
                        {characters.map((char, index) => (
                            <div key={index} style={{ filter: unlockedCharacters.some((unlockedChar) => unlockedChar.hidingIn === char.hidingIn) ? 'contrast(100%) ' : 'contrast(0%) brightness(0%)' }}>
                                <img className="character-image" src={char.img} alt={`${char.name} character image`} />
                            </div>
                        ))}
                    </div>
                </div>
                <div>

                </div>
                <div className="container-soundtrack">
                    {
                        isMenuOpen ?
                            <span className="menu-text" onClick={toggleMenu}>PAUSED</span>
                            :
                            <span className="menu-text" onClick={toggleMenu}>MENU</span>
                    }
                </div>


            </div>
        </>
    )
}