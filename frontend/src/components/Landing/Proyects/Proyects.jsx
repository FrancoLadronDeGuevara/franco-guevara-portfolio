import "./Proyects.css"
import { listaProyectos } from "./ProyectsInfo"
import Card from "../../Card/Card";

export default function Proyects() {




    return (
        <>
        <hr />
            <h2 className="h2-dosis">PROYECTOS</h2>
            <hr />
            <div className="container-proyectos">
                {
                    listaProyectos.map(proyect => (
                    <Card key={proyect.id} imagen={proyect.imagen} name={proyect.name} description={proyect.description} linkWeb={proyect.linkWeb} linkGit={proyect.linkGit} />
                    ))
                }
            </div>
        </>
    )
}