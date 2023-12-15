import "./Footer.css"
import CharacterButton from "../CharacterButton/CharacterButton"

export default function Footer({onCharacterUnlock}){
    return(
        <>  
            <footer className="container-footer">
                <p>
                    ©2023 <CharacterButton hidingIn="Franco" onCharacterUnlock={onCharacterUnlock}/> Guevara
                </p>

                <div className="footer-icons">
                    <a href="https://github.com/FrancoLadronDeGuevara" target={"_blank"} rel={"noreferrer"}><i className="nes-icon github"></i></a>
                    <a href="https://www.facebook.com/FrancoDeGuevara/" target={"_blank"} rel={"noreferrer"}><i className="nes-icon facebook"></i></a>
                    <a href="https://wa.link/z6kh6m" target={"_blank"} rel={"noreferrer"}><i className="nes-icon whatsapp"></i></a>
                    <a href="https://www.linkedin.com/in/franco-guevara/" target={"_blank"} rel={"noreferrer"}><i className="nes-icon linkedin"></i></a>
                </div>
            </footer>
        </>
    )
}