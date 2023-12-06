import "./Proyects.css"
import { proyectsList } from "./ProyectsInfo"
import Card from "../../Card/Card";
import CharacterButton from "../../CharacterButton/CharacterButton";

export default function Proyects({onCharacterUnlock}) {

    return (
        <>
            <div className="container-proyects">
                <div className="title-box">
                    <hr />
                    <span>Proyect<CharacterButton hidingIn="s" onCharacterUnlock={onCharacterUnlock}/></span>
                    <hr />
                </div>
                <div className="proyects">
                    {
                        proyectsList.map(proyect => (
                            <Card key={proyect.id} imagen={proyect.imagen} name={proyect.name} description={proyect.description} linkWeb={proyect.linkWeb} linkGit={proyect.linkGit} />
                        ))
                    }
                </div>
            </div>

        </>
    )
}