import "./Card.css"
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import clickImage from "../../assets/icons/click.png";

export default function Card({ imagen, name, description, linkWeb, linkGit, isFlipped }) {

    return (
        <>
            <div className={`cartridge ${isFlipped ? 'flipped' : ''}`}>
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
                        <img src={imagen} alt={`${name} proyect image`} className={`image ${isFlipped ? 'hidden' : ''}`} />
                        <img src={clickImage} alt="click here image" className={`click-image ${isFlipped ? 'hidden' : ''}`}/>
                    </div>
                </div>
                <div className={`part triangle ${isFlipped ? 'hidden' : ''}`}></div>
                <div className={`buttons-links ${isFlipped ? 'show' : ''}`}>
                    <a href={linkGit} target={"_blank"} rel={"noreferrer"}><button className="nes-btn is-primary"><AiOutlineGithub fontSize={"25px"} /></button></a>
                    <a href={linkWeb} target={"_blank"} rel={"noreferrer"}><button className="nes-btn is-success"><AiOutlineLink fontSize={"25px"} /></button></a>
                </div>
            </div>
        </>
    )
}