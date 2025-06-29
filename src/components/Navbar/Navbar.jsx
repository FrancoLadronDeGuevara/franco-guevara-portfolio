import "./Navbar.css";
import { useState } from "react";
import Menu from "./components/Menu/Menu";
import { useTranslation } from "react-i18next";

export default function Navbar({ unlockedCharacters, onCharacterUnlock, characters }) {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <div className="container-navbar nes-container is-rounded">
                <div className={`menu ${isMenuOpen && 'open'}`}>
                    <Menu unlockedCharacters={unlockedCharacters} onCharacterUnlock={onCharacterUnlock} characters={characters} />
                </div>
                <div className="container-soundtrack">
                    {
                        isMenuOpen ?
                            <span className="menu-text" onClick={toggleMenu}>{t("navbar.paused")}</span>
                            :
                            <span className="menu-text" onClick={toggleMenu}>MENU</span>
                    }
                </div>


            </div>
        </>
    )
}