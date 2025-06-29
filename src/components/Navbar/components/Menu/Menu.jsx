import { useTranslation } from "react-i18next";
import { CharactersGame, ContactIcons, LanguageSwitcher, Music, Resume } from "./components";
import "./Menu.css"
import CharacterButton from "../../../CharacterButton/CharacterButton";

const Menu = ({ unlockedCharacters, onCharacterUnlock, characters }) => {
    const { t } = useTranslation();

    return (
        <div className="menu-container">
            <div className="nes-container is-rounded menu-actions">
                <div className="menu-actions-title">
                    <hr /><p>{t("navbar.actions")}</p><hr />
                </div>
                <div className="menu-actions-content">
                    <Resume onCharacterUnlock={onCharacterUnlock} />
                    <CharactersGame unlockedCharacters={unlockedCharacters} onCharacterUnlock={onCharacterUnlock} characters={characters} />
                </div>
            </div>
            <div className="nes-container is-rounded menu-config">
                <div className="menu-config-title">
                    <hr /><p>{t("navbar.config")}</p><hr />
                </div>
                <div className="menu-config-content">
                    <Music />
                    <LanguageSwitcher />
                </div>
            </div>
            <div className="nes-container is-rounded menu-contact">
                <div className="menu-contact-title">
                    <hr /><p><CharacterButton hidingIn={t("navbar.contact")} onCharacterUnlock={onCharacterUnlock} /></p><hr />
                </div>
                <ContactIcons />
            </div>
        </div>
    )
}

export default Menu