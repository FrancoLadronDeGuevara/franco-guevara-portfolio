import { useTranslation } from "react-i18next";
import cvIcon from "@/assets/icons/cv.png"
import CharacterButton from "../../../../../CharacterButton/CharacterButton";

const Resume = ({ onCharacterUnlock }) => {
    const { t, i18n } = useTranslation();

    const links = {
        es: "https://drive.google.com/file/d/1JB8W2sNtYRgB-aXuYEYGFSM-TYduSom7/view?usp=drive_link",
        en: "https://drive.google.com/file/d/1gZCYPnjOhK6lXNt2eitg2Ow5IX_NaRJ-/view?usp=drive_link"
    }

    return (
        <div className="cv-container" onClick={() => window.open(links[i18n.language], "_blank")}>
            <button className="nes-btn is-success icon-button">
                <img src={cvIcon} width="20px" alt="curriculum vitae icon" />
            </button>
            <span style={{ whiteSpace: "nowrap" }}>
                <CharacterButton hidingIn={t("navbar.downloadCV")} onCharacterUnlock={onCharacterUnlock} />
            </span>
        </div>
    )
}

export default Resume