import "./Skills.css"
import { skillsData } from "./Skills";
import CharacterButton from "../../CharacterButton/CharacterButton";

export default function Skills({ onCharacterUnlock }) {
    const softSkills = ["Creativity", "Teamwork", "Problem-solving", "Critical Thinking", "Adaptability", "Communication", "Time Management", "Initiative"]
    const hardSkills = ["HTML/CSS", "JavaScript", "ReactJS", "Scrum methodology", "Responsive Design", "CSS Frameworks", "Package Managers", "Version Control/Git"]



    return (
        <>
            <article className="container-skills">
                <div className="title-box">
                    <hr />
                    <span>Techno<CharacterButton hidingIn="lo" onCharacterUnlock={onCharacterUnlock} />gies</span>
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

                <section className="container-hard-softskills">

                    <div 
                        className="container-softskills nes-container is-rounded">
                        <h3 className="text-skills">Hard Skills</h3>
                        <div>
                            {hardSkills.map((hardskill, index) => (<p key={index} className="softskill">{hardskill}</p>))}
                        </div>
                    </div>

                    <div 
                        className="container-softskills nes-container is-rounded">
                        <h3 className="text-skills">Soft <CharacterButton hidingIn="Skills" onCharacterUnlock={onCharacterUnlock} /></h3>
                        <div>
                            {softSkills.map((softskill, index) => (<p key={index} className="softskill">{softskill}</p>))}
                        </div>
                    </div>
                </section>
            </article>
        </>
    )
}