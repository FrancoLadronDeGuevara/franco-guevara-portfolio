import "./AboutMe.css"
import { useState } from "react";
import CharacterButton from "../../CharacterButton/CharacterButton"
import { useTranslation } from "react-i18next";


export default function AboutMe({ onCharacterUnlock }) {
    const { t } = useTranslation();
    const [arcadeOn, setArcadeOn] = useState(false);

    const handleArcadeImage = () => {
        setArcadeOn(true)
    }


    return (
        <>
            <div className="title-box">
                <hr />
                <CharacterButton hidingIn={t("aboutMe.title")} onCharacterUnlock={onCharacterUnlock} />
                <hr />
            </div>

            <section className="container-about-me">
                <div className="container-ballons">
                    <div
                        className="nes-balloon from-left">
                        {t("aboutMe.firstDescription")}
                        <CharacterButton hidingIn="nostalgia." onCharacterUnlock={onCharacterUnlock} />
                    </div>

                    <div
                        className="nes-balloon from-right">
                        {t("aboutMe.secondDescription")}
                    </div>
                </div>

                <div className="arcade-image" onClick={handleArcadeImage}>
                    <div className={`filter ${arcadeOn && 'pacman-image'}`}>
                        <span className={`insert-coin ${arcadeOn && 'hide-text'}`}>INSERT COIN</span>
                    </div>
                </div>

            </section>


        </>
    )
}