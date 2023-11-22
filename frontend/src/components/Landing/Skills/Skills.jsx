import "./Skills.css"
import { skillsData } from "./Skills";

export default function Skills() {

    const techSkills = skillsData.slice(0, 5);

    return (
        <>
            <article className="container-skills">
                <div className="title-box">
                    <hr />
                    <span>Tecnologías</span>
                    <hr />
                </div>
                <section className="slider-skills">
                    <div className="slide-track">
                        {skillsData.map((skill, index) => (
                            <div key={index} className="slide-skill">
                                <img src={skill.logo} alt={skill.name} />
                            </div>
                        ))}
                        {skillsData.map((skill, index) => (
                            <div key={index} className="slide-skill">
                                <img src={skill.logo} alt={skill.name} />
                            </div>
                        ))}
                    </div>
                </section>

                <section className="container-tech-softskills">
                    <div className="container-tech nes-container is-rounded">
                        <h3 className="text-skills">Skills</h3>
                        {techSkills.map((techSkill, index) => (
                            <div key={index} className="skill-bar-container">
                                <span className="skill-name">{techSkill.name}</span>
                                <span className={`skill-bar level${techSkill.level}`}></span>
                            </div>
                        ))}
                    </div>
                    <div className="container-softskills nes-container is-rounded">
                        <h3 className="text-skills">Soft Skills</h3>
                        <div>
                            <p className="softskill"><i className="nes-icon trophy"></i>Creatividad</p>
                            <p className="softskill"><i className="nes-icon trophy"></i>Trabajo en Equipo</p>
                            <p className="softskill"><i className="nes-icon trophy"></i>Compromiso</p>
                            <p className="softskill"><i className="nes-icon trophy"></i>Pensamiento Crítico</p>
                            <p className="softskill"><i className="nes-icon trophy"></i>Capacidad Resolutiva</p>
                        </div>
                    </div>
                </section>
            </article>
        </>
    )
}