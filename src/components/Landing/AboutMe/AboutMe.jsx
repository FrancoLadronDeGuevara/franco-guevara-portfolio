import "./AboutMe.css"
import { useState } from "react";
import CharacterButton from "../../CharacterButton/CharacterButton"


export default function AboutMe({ onCharacterUnlock }) {
    const [arcadeOn, setArcadeOn] = useState(false);

    const handleArcadeImage = () => {
        setArcadeOn(true)
    }


    return (
        <>
            <div className="title-box">
                <hr />
                <span>About <CharacterButton hidingIn="Me" onCharacterUnlock={onCharacterUnlock} /></span>
                <hr />
            </div>
            
            <section className="container-about-me">
                <div className="container-ballons">
                    <div
                    className="nes-balloon from-left">
                        <p>I am a full stack developer who merges a passion for technology with a fascination for old video <CharacterButton hidingIn="games" onCharacterUnlock={onCharacterUnlock} /> and design.
                            I focus on creating engaging and functional digital experiences for users, channeling my creativity and problem-solving skills.</p>
                    </div>

                    <div
                    className="nes-balloon from-right">
                        <p>Outside of web development, I dedicate my time to studying game design and creating <CharacterButton hidingIn="2D" onCharacterUnlock={onCharacterUnlock} /> games with Godot.
                            My commitment to continuous learning drives my motivation and keeps me dedicated to my professional development, facing new challenges with enthusiasm.</p>
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