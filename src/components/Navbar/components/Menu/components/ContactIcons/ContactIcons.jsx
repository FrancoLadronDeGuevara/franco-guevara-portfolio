import "./ContactIcons.css"

const ContactIcons = () => {
    return (
        <div className="footer-icons" style={{ alignSelf: "center"}}>
            <a href="https://github.com/FrancoLadronDeGuevara" target={"_blank"} rel={"noreferrer"}><i className="nes-icon github"></i></a>
            <a href="https://www.facebook.com/FrancoDeGuevara/" target={"_blank"} rel={"noreferrer"}><i className="nes-icon facebook"></i></a>
            <a href="https://wa.link/z6kh6m" target={"_blank"} rel={"noreferrer"}><i className="nes-icon whatsapp"></i></a>
            <a href="https://www.linkedin.com/in/franco-guevara/" target={"_blank"} rel={"noreferrer"}><i className="nes-icon linkedin"></i></a>
        </div>
    )
}

export default ContactIcons