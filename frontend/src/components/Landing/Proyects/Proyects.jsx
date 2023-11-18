import "./Proyects.css"
import { listaProyectos } from "./ProyectsInfo"
import Card from "../../Card/Card";

export default function Proyects() {




    return (
        <>
            <div className="container-proyects">
                <h2>PROYECTOS</h2>
                <hr />
                <div className="proyects">
                    {
                        listaProyectos.map(proyect => (
                            <Card key={proyect.id} imagen={proyect.imagen} name={proyect.name} description={proyect.description} linkWeb={proyect.linkWeb} linkGit={proyect.linkGit} />
                        ))
                    }
                </div>
            </div>

        </>
    )
}