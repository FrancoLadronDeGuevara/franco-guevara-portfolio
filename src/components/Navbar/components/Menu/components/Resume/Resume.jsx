import { useTranslation } from "react-i18next";
import cvIcon from "@/assets/icons/cv.png"

const Resume = () => {
    const { t, i18n } = useTranslation();

    const links = {
        es: "https://drive.google.com/file/d/1Uqj_G-37FuA7GDcnxDhXVW-Qu2qVywnu/view?usp=sharing",
        en: "https://drive.google.com/file/d/15lWa9twv5Wz11Z7mmG0GIP4kjsQ79--6/view?usp=sharing"
    }

    return (
        <div className="cv-container" onClick={() => window.open(links[i18n.language], "_blank")}>
            <button className="nes-btn is-success icon-button">
                <img src={cvIcon} width="20px" alt="curriculum vitae icon" />
            </button>
            <span style={{ whiteSpace: "nowrap" }}>
                {t("navbar.downloadCV")}
            </span>
        </div>
    )
}

export default Resume