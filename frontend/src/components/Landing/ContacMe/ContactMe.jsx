import "./ContactMe.css"
import { AiOutlineWhatsApp, AiOutlineMail, AiOutlineEnvironment } from "react-icons/ai";
import CharacterButton from "../../CharacterButton/CharacterButton";

export default function ContactMe({onCharacterUnlock}) {

    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    return (
        <>
            <section className="container-contact">
                <div>
                    <h2>Contact Me<CharacterButton hidingIn="!" onCharacterUnlock={onCharacterUnlock}/></h2>
                    <hr />
                    <div className="contact-left-info">
                        <div><i><AiOutlineMail /></i><p>francoguevara93@gmail.com</p></div>
                        <div><i><AiOutlineWhatsApp /></i><p>+54-381<CharacterButton hidingIn="5" onCharacterUnlock={onCharacterUnlock}/>367724</p></div>
                        <div><i><AiOutlineEnvironment /></i><p>Tucumán, Argentina</p></div>
                    </div>
                </div>
                <div className="contact-right">
                    <form onSubmit={handleSubmit}>
                        <input className="nes-input" type="email" name="email" id="userEmail" placeholder="Email"  required/>

                        <input className="nes-input" type="text" name="userName" id="userName" placeholder="Subject"  required/>

                        <textarea name="textarea" className="nes-textarea" id="userMessage" cols="50" rows="3" placeholder="Leave a message" required></textarea>

                        <input className="nes-btn is-success" type="submit" value="Submit" />
                    </form>
                </div>
            </section>

        </>
    )
}