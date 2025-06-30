import "./ProfessionalExperience.css"
import { useTranslation } from "react-i18next"

const ProfessionalExperience = () => {
    const { t } = useTranslation()

    const jobList = ["instructor", "appsnube", "freelance", "tutor"]

    return (
        <>
            <div className="title-box">
                <hr />
                <span>
                    {t("professionalExperience.title")}
                </span>
                <hr />
            </div>
            <div className="job-list-container">
                {jobList.map((job, index) => (
                    <article key={index} className="nes-container is-rounded job-container">
                        <h3>{t(`professionalExperience.${job}.jobTitle`)}</h3>
                        <i>{t(`professionalExperience.${job}.date`)}</i>
                        <p>{t(`professionalExperience.${job}.jobDescription`)}</p>
                        <div className="job-responsibilities">
                            <ul className="nes-list is-disc">
                                <li>{t(`professionalExperience.${job}.firstResponsibility`)}</li>
                                <li>{t(`professionalExperience.${job}.secondResponsibility`)}</li>
                                <li>{t(`professionalExperience.${job}.thirdResponsibility`)}</li>
                            </ul>
                        </div>
                    </article>
                ))}
            </div>
        </>
    )
}

export default ProfessionalExperience