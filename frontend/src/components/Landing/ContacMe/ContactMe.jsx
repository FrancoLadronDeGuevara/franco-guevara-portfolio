import "./ContactMe.css"
import { AiOutlineWhatsApp, AiOutlineMail, AiOutlineEnvironment } from "react-icons/ai";

export default function ContactMe() {



    return (
        <>
            <section className="container-contact">
                <div>
                    <h2>Contactame!</h2>
                    <hr />
                    <div className="contact-left-info">
                        <div><i><AiOutlineMail /></i><p>francoguevara93@gmail.com</p></div>
                        <div><i><AiOutlineWhatsApp /></i><p>+54-3815367724</p></div>
                        <div><i><AiOutlineEnvironment /></i><p>Tucumán, Argentina</p></div>
                    </div>
                </div>
                <div className="contact-right">
                    <form action="">
                        <input className="nes-input" type="email" name="email" id="userEmail" placeholder="Email"  required/>

                        <input className="nes-input" type="text" name="userName" id="userName" placeholder="Asunto"  required/>

                        <textarea name="textarea" className="nes-textarea" id="userMessage" cols="50" rows="3" placeholder="Mensaje" required></textarea>

                        <input className="nes-btn is-success" type="submit" value="Enviar" />
                    </form>
                </div>
            </section>

        </>
    )
}