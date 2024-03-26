import "./Presentation.css"
import ImagenPerfil from "../../../assets/profile/profile.png"
import CharacterButton from "../../CharacterButton/CharacterButton"

export default function Presentation({ onCharacterUnlock }) {
    return (
        <div className="container">
            <div className="parallax background"></div>
            <div className="parallax background-two"></div>
            <div className="container-image-presentation">
                <div className="container-left">
                    <h3 className="text-top">FULL STACK DEVELOPER</h3>
                    <h1 className="text-center">FRANCO GUEVARA</h1>
                    <h6 className="text-bottom"><CharacterButton hidingIn="Creative" onCharacterUnlock={onCharacterUnlock} /> Programmer, Game Design student</h6>
                </div>
                <div className="container-right">
                    <img src={ImagenPerfil} alt="franco guevara image" className="right-side-img" />
                </div>
            </div>

        </div>
    )
}