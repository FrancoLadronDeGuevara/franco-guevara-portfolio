import "./Card.css"
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import { useState } from "react";

export default function Card({ id, imagen, name, description, linkWeb, linkGit }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };


    return (
        <>
            <div className={`cartridge ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
                    <p className={`description ${isFlipped ? 'visible' : ''}`}>{description}</p>
                <div className="part part_1"></div>
                <div className="part part_2">
                    <div className={`part stripe ${isFlipped ? 'hidden' : ''}`}></div>
                    <div className={`part stripe ${isFlipped ? 'hidden' : ''}`}></div>
                    <div className={`part stripe ${isFlipped ? 'hidden' : ''}`}></div>
                    <div className={`part stripe ${isFlipped ? 'hidden' : ''}`}></div>
                    <div className={`part stripe ${isFlipped ? 'hidden' : ''}`}></div>
                </div>
                <div className={`part logo ${isFlipped ? 'hidden' : ''}`}><p>{name}<span>©</span></p></div>
                <div className="part large"></div>
                <div className="part dark">
                    <div className="part"></div>
                </div>
                <div className="part dark image_bg">
                    <div className="part image">
                        <img src={imagen} alt="" className={`image ${isFlipped ? 'hidden' : ''}`} />
                    </div>
                </div>
                <div className={`part triangle ${isFlipped ? 'hidden' : ''}`}></div>
                <div className={`buttons-links ${isFlipped ? 'show' : ''}`}>
                    <a href={linkGit} target={"_blank"} rel={"noreferrer"}><button className="nes-btn is-primary"><AiOutlineGithub fontSize={"20px"} /></button></a>
                    <a href={linkWeb} target={"_blank"} rel={"noreferrer"}><button className="nes-btn is-success"><AiOutlineLink fontSize={"20px"} /></button></a>
                </div>
            </div>
        </>
    )
}