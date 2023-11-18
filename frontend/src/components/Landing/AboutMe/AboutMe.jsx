import { useEffect, useRef, useState } from "react";
import Arrow from "../../../assets/icons/arrow.png"
import "./AboutMe.css"

export default function AboutMe() {
    const containerRef = useRef(null);
    const scrollIconRef = useRef(null);
    const [isAtBottom, setIsAtBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current;
            const scrollPosition = container.scrollTop;
            const atBottom = scrollPosition >= (container.scrollHeight - container.clientHeight);

            setIsAtBottom(atBottom);
        };

        const container = containerRef.current;
        container.addEventListener("scroll", handleScroll);

        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <hr />
            <h2>SOBRE MI!</h2>
            <hr />
            <div className="nes-container is-rounded about-me" ref={containerRef}>
                <article className="content-about">
                    <span>Soy un desarrollador web full-stack que fusiona amor por la tecnología con fascinación por los videojuegos y el diseño.</span>
                    <span>Me enfoco en crear experiencias digitales atractivas y funcionales para los usuarios, canalizando mi creatividad y habilidades de resolución de problemas. </span>
                    <span>Fuera del desarrollo web, dedico mi tiempo al estudio del diseño de juegos y a la creación de juegos en 2D con Godot. </span>
                    Mi compromiso con el aprendizaje continuo impulsa mi motivación y me mantiene comprometido con mi desarrollo profesional, enfrentando con entusiasmo nuevos desafíos.
                </article>
                <div className={`scroll-icon ${isAtBottom ? 'hidden' : ''}`} ref={scrollIconRef}>
                    <img src={Arrow}></img>
                </div>
            </div>

        </>
    )
}