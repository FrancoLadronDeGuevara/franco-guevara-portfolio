import ImagenPerfil from "../../../assets/perfil.jpg"
import "./Presentation.css"

export default function Presentation() {
    return (
        <div className="container">
            <div className="parallax background"></div>
            <div className="parallax background-two"></div>
            <div className="container-left-side">
                <img src={ImagenPerfil} alt="" className="left-side-img" />
            </div>
            <div className="container-right-side">
                    <h3 className="text-top">FULL-STACK WEB DEVELOPER</h3>
                    <h1 className="text-center">FRANCO GUEVARA</h1>
                    <h6 className="text-bottom">Creative Developer, Game Design student</h6>
            </div>
        </div>
    )
}