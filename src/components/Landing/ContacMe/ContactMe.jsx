import "./ContactMe.css"
import { AiOutlineWhatsApp, AiOutlineMail, AiOutlineEnvironment } from "react-icons/ai";
import CharacterButton from "../../CharacterButton/CharacterButton";
import Loader from "../../Loader/Loader";
import { useForm } from "../../../hooks/useForm";
import Modal from "../../Modal/Modal";

const initialForm = {
    email: "",
    subject: "",
    message: "",
}

const validationsForm = (form) => {
    let errors = {};
    let regexSubject = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,40}$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexMessage = /^.{1,255}$/;

    if (!form.email.trim()) {
        errors.email = "**Email is required**"
    } else if (!regexEmail.test(form.email.trim())) {
        errors.email = "Invalid email"
    }

    if (!form.subject.trim()) {
        errors.subject = "**Subject is required**"
    } else if (!regexSubject.test(form.subject.trim())) {
        errors.subject = "Invalid Subject"
    }

    if (!form.message.trim()) {
        errors.message = "**The Message field is required**"
    } else if (!regexMessage.test(form.message.trim())) {
        errors.message = "Must be less than 255 characters"
    }

    return errors
}

export default function ContactMe({ onCharacterUnlock }) {
    const {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit,
    } = useForm(initialForm, validationsForm)

    return (
        <>
            <div className="title-box">
                <hr />
                <h2>Contact Me<CharacterButton hidingIn="!" onCharacterUnlock={onCharacterUnlock} /></h2>
                <hr />
            </div>

            <section className="container-contact">
                <div className="contact-top-info">
                    <div><i><AiOutlineMail /></i><p>francoguevara93@gmail.com</p></div>
                    <div><i><AiOutlineWhatsApp /></i><p>+54-381<CharacterButton hidingIn="5" onCharacterUnlock={onCharacterUnlock} />367724</p></div>
                    <div><i><AiOutlineEnvironment /></i><p>Tucumán, Argentina</p></div>
                </div>

                <div className="contact-bottom">
                    <form onSubmit={handleSubmit}>
                        <input className="nes-input" type="email" id="userEmail" name="email" placeholder="Email" onBlur={handleBlur} onChange={handleChange} value={form.email} required />
                        {errors.email && <p className="error-message">{errors.email}</p>}

                        <input className="nes-input" type="text" id="userSubject" name="subject" placeholder="Subject" onBlur={handleBlur} onChange={handleChange} value={form.subject} required />
                        {errors.subject && <p className="error-message">{errors.subject}</p>}

                        <textarea className="nes-textarea" id="userMessage" name="message" cols="50" rows="5" placeholder="Leave a message" onBlur={handleBlur} onChange={handleChange} value={form.message} required></textarea>
                        {errors.message && <p className="error-message">{errors.message}</p>}
                        
                        {loading? <Loader/> : <input className="nes-btn is-success" type="submit" value="Submit" />}
                        
                    </form>
                    {response && <Modal/>}
                </div>
            </section>

        </>
    )
}