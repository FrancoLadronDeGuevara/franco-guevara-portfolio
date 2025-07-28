import { useTranslation } from "react-i18next";
import cvIcon from "@/assets/icons/cv.png";
import CharacterButton from "../../../../../CharacterButton/CharacterButton";

const Resume = ({ onCharacterUnlock }) => {
  const { t, i18n } = useTranslation();

  const links = {
    es: "https://drive.google.com/file/d/1Bq06u1_Usha8KlKiH0YNl6QQ_Z8E1UpD/view?usp=drive_link",
    en: "https://drive.google.com/file/d/1egC_tMhoBgO5_FxnkVp4CQdDPa3oqGqN/view?usp=drive_link",
  };

  return (
    <div
      className="cv-container"
      onClick={() => window.open(links[i18n.language], "_blank")}
    >
      <button className="nes-btn is-success icon-button">
        <img src={cvIcon} width="20px" alt="curriculum vitae icon" />
      </button>
      <span style={{ whiteSpace: "nowrap" }}>
        <CharacterButton
          hidingIn={t("navbar.downloadCV")}
          onCharacterUnlock={onCharacterUnlock}
        />
      </span>
    </div>
  );
};

export default Resume;
