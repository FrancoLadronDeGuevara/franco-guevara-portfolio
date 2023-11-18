import logoBootstrap from "../../../assets/Slider/bootstrap.png";
import logoCss from "../../../assets/Slider/css.png";
import logoExpress from "../../../assets/Slider/express.png";
import logoHtml from "../../../assets/Slider/html.png";
import logoJavascript from "../../../assets/Slider/javascript.png";
import logoMongo from "../../../assets/Slider/mongo.png";
import logoNode from "../../../assets/Slider/node.png";
import logoReact from "../../../assets/Slider/react.png";
import logoRedux from "../../../assets/Slider/redux.png";
import logoSass from "../../../assets/Slider/sass.png";
import logoSlack from "../../../assets/Slider/slack.png";
import logoTrello from "../../../assets/Slider/trello.png";
import logoNpm from "../../../assets/Slider/npm.png";
import logoGodot from "../../../assets/Slider/godot.png";
import logoGit from "../../../assets/Slider/git.png";
import "./Skills.css"

const Skills = () => {
    return (
        <>
            <article className="container-skills">
                <h2 className="h2-dosis">Tecnologías</h2>
                <hr />
                <section className="slider-skills">
                    <div className="slide-track">
                        <div className="slide-skill">
                            <img src={logoHtml} alt="" />
                        </div>
                        <div className="slide-skill">
                            <img src={logoCss} alt="" />
                        </div>
                        <div className="slide-skill">
                            <img src={logoJavascript} alt="" />
                        </div>
                        <div className="slide-skill">
                            <img src={logoBootstrap} alt="" />
                        </div>
                        <div className="slide-skill">
                            <img src={logoSass} alt="" />
                        </div>
                        <div className="slide-skill">
                            <img src={logoMongo} alt="" />
                        </div>
                        <div className="slide-skill">
                            <img src={logoExpress} alt="" />
                        </div>
                        <div className="slide-skill">
                            <img src={logoReact} alt="" />
                        </div>
                        <div className="slide-skill">
                            <img src={logoNode} alt="" />
                        </div>
                        <div className="slide-skill">
                            <img src={logoRedux} alt="" />
                        </div>
                        <div className="slide-skill">
                            <img src={logoTrello} alt="" />
                        </div>
                        <div className="slide-skill">
                            <img src={logoSlack} alt="" />
                        </div>
                        <div className="slide-skill">
                            <img src={logoNpm} alt="" />
                        </div>
                        <div className="slide-skill">
                            <img src={logoGodot} alt="" />
                        </div>
                        <div className="slide-skill">
                            <img src={logoGit} alt="" />
                        </div>
                        <div className="slide-skill">
                            <img src={logoHtml} alt="" />
                        </div>
                        <div className="slide-skill">
                            <img src={logoCss} alt="" />
                        </div>
                        <div className="slide-skill">
                            <img src={logoJavascript} alt="" />
                        </div>
                        <div className="slide-skill">
                            <img src={logoBootstrap} alt="" />
                        </div>
                        <div className="slide-skill">
                            <img src={logoSass} alt="" />
                        </div>
                        <div className="slide-skill">
                            <img src={logoMongo} alt="" />
                        </div>
                        <div className="slide-skill">
                            <img src={logoExpress} alt="" />
                        </div>
                        <div className="slide-skill">
                            <img src={logoReact} alt="" />
                        </div>
                        <div className="slide-skill">
                            <img src={logoNode} alt="" />
                        </div>
                        <div className="slide-skill">
                            <img src={logoRedux} alt="" />
                        </div>
                        <div className="slide-skill">
                            <img src={logoTrello} alt="" />
                        </div>
                        <div className="slide-skill">
                            <img src={logoSlack} alt="" />
                        </div>
                        <div className="slide-skill">
                            <img src={logoNpm} alt="" />
                        </div>
                        <div className="slide-skill">
                            <img src={logoGodot} alt="" />
                        </div>
                        <div className="slide-skill">
                            <img src={logoGit} alt="" />
                        </div>
                    </div>
                </section>

                <section className="container-tech-softskills">
                    <div className="container-tech">
                        <h2 className="h2-dosis">Skills</h2>
                        <hr />
                        <div className="skill-bar-container">
                            <span className="skill-name">HTML</span>
                            <span className="skill-percent">90%</span>
                            <span className="skill-bar level4"></span>
                        </div>

                        <div className="skill-bar-container">
                            <span className="skill-name">CSS</span>
                            <span className="skill-percent">90%</span>
                            <span className="skill-bar level4"></span>
                        </div>

                        <div className="skill-bar-container">
                            <span className="skill-name">Javascript</span>
                            <span className="skill-percent">80%</span>
                            <span className="skill-bar level3"></span>
                        </div>

                        <div className="skill-bar-container">
                            <span className="skill-name">ReactJS</span>
                            <span className="skill-percent">70%</span>
                            <span className="skill-bar level2"></span>
                        </div>

                        <div className="skill-bar-container">
                            <span className="skill-name">NodeJS</span>
                            <span className="skill-percent">50%</span>
                            <span className="skill-bar level1"></span>
                        </div>
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

export default Skills;