
import "./AboutMe.css"
import soundtrack from "../../../assets/sounds/soundtrack.mp3"
import { useRef, useState } from "react";

export default function AboutMe() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audio = useRef(null);

    const handleMusic = () => {
        if (!isPlaying) {
            audio.current = new Audio(soundtrack);
            audio.current.play();
        } else {
            audio.current.pause();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <>
            <div className="title-box">
                <hr />
                <span>¿Quién soy?</span>
                <hr />
            </div>
            <div className="container-about-me">
                <div className="about-me-first">
                    <p>Soy un desarrollador web full-stack que fusiona amor por la tecnología con fascinación por los videojuegos y el diseño.</p>
                    <p>Me enfoco en crear experiencias digitales atractivas y funcionales para los usuarios, canalizando mi creatividad y habilidades de resolución de problemas.</p>
                </div>
                <div className="arcade-image" onClick={handleMusic}>
                    <div className="colors"></div>
                    <div className="click"></div>
                </div>
                <div className="about-me-last">
                    <p>Fuera del desarrollo web, dedico mi tiempo al estudio del diseño de juegos y a la creación de juegos en 2D con Godot.</p>
                    <p>Mi compromiso con el aprendizaje continuo impulsa mi motivación y me mantiene comprometido con mi desarrollo profesional, enfrentando con entusiasmo nuevos desafíos.</p>
                </div>
            </div>


        </>
    )
}