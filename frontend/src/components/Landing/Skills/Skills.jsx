import "./Skills.css"
import { skillsData } from "./Skills";

export default function Skills() {

    const techSkills = skillsData.slice(0, 5);

    return (
        <>
            <article className="container-skills">
                <div className="title-box">
                    <h2>Tecnologías</h2>
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
                    <div className="container-tech">
                        <h2>Skills</h2>
                        <hr />
                        {techSkills.map((techSkill, index) => (
                            <div key={index} className="skill-bar-container">
                                <span className="skill-name">{techSkill.name}</span>
                                <span className={`skill-bar level${techSkill.level}`}></span>
                            </div>
                        ))}
                    </div>
                    <div className="container-softskills">
                        <h2>Soft Skills</h2>
                        <hr />
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