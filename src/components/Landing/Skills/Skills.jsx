import "./Skills.css"
import { skillsData } from "./Skills";
import CharacterButton from "../../CharacterButton/CharacterButton";
import { useTranslation } from "react-i18next";

export default function Skills({ onCharacterUnlock }) {
    const { t } = useTranslation();
    const softSkills = ["creative", "teamwork", "problemSolving", "criticalThinking", "adaptability", "communication", "timeManagement", "initiative"]
    const hardSkills = ["frontend", "backend", "cloudDevOps", "tools", "methodologies"]

    return (
        <>
            <section className="container-skills">
                <div className="title-box">
                    <hr />
                    <CharacterButton hidingIn={t("technologies.title")} onCharacterUnlock={onCharacterUnlock} />
                    <hr />
                </div>
                <article className="slider-skills">
                    <div className="slide-track">
                        {skillsData.map((skill, index) => (
                            <div key={index} className="slide-skill">
                                <img src={skill.logo} alt={`${skill.name} image`} />
                            </div>
                        ))}
                        {skillsData.map((skill, index) => (
                            <div key={index} className="slide-skill">
                                <img src={skill.logo} alt={`${skill.name} image`} />
                            </div>
                        ))}
                    </div>
                </article>

                <article className="container-hard-softskills">
                    <div
                        className="container-softskills nes-container is-rounded">
                        <h3 className="text-skills">{t("technologies.hardSkills.title")}</h3>
                        <div>
                            {hardSkills.map((hardskill, index) => (<p key={index} className="softskill">{t(`technologies.hardSkills.${hardskill}`)}</p>))}
                        </div>
                    </div>
                    <div
                        className="container-softskills nes-container is-rounded">
                        <h3 className="text-skills"><CharacterButton hidingIn={t("technologies.softSkills.title")} onCharacterUnlock={onCharacterUnlock} /></h3>
                        <div>
                            {softSkills.map((softskill, index) => (<p key={index} className="softskill">{t(`technologies.softSkills.${softskill}`)}</p>))}
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}