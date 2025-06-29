import "./Proyects.css"
import { proyectsList } from "./ProyectsInfo"
import Card from "../../Card/Card";
import CharacterButton from "../../CharacterButton/CharacterButton";
import FlipAnimation from "../../FlipAnimation/FlipAnimation";
import { useTranslation } from "react-i18next";

export default function Proyects({ onCharacterUnlock }) {
    const { t } = useTranslation();

    const proyects = ["pokedex", "restaurantProject", "clickMarket", "mimArte", "vangaMovies", "soundStream", "chickenAdventure", "rollingGame"]; 

    return (
        <>
            <div className="title-box">
                <hr />
                <span>{t("proyects.title")}<CharacterButton hidingIn="s" onCharacterUnlock={onCharacterUnlock} /></span>
                <hr />
            </div>

            <section className="container-proyects">
                <article className="proyects">
                    {
                        proyectsList.map((proyect, indexProyect) => (
                            <FlipAnimation key={indexProyect} width="250px" height="300px">
                                {(props) => (
                                    <div>
                                        {props.variant === 'Front' && <Card isFlipped={false} imagen={proyect.imagen} name={proyect.name} linkWeb={proyect.linkWeb} linkGit={proyect.linkGit} />}
                                        {props.variant === 'Back' && <Card isFlipped={true} imagen={proyect.imagen} name={proyect.name} description={t(`proyects.${proyects[indexProyect]}`)} linkWeb={proyect.linkWeb} linkGit={proyect.linkGit} />}
                                    </div>
                                )}
                            </FlipAnimation>
                        ))
                    }
                </article>
            </section>

        </>
    )
}