import "./Footer.css"

export default function Footer(){
    return(
        <>  
        <hr />
            <div className="container-footer">
                <p>
                    ©2023 Franco Guevara
                </p>

                <div className="footer-icons">
                    <a href="https://github.com/FrancoLadronDeGuevara" target={"_blank"} rel={"noreferrer"}><i className="nes-icon github"></i></a>
                    <a href="https://www.facebook.com/FrancoDeGuevara/" target={"_blank"} rel={"noreferrer"}><i className="nes-icon facebook"></i></a>
                    <a href="" target={"_blank"} rel={"noreferrer"}><i className="nes-icon whatsapp"></i></a>
                    <a href="https://www.linkedin.com/in/franco-guevara/" target={"_blank"} rel={"noreferrer"}><i className="nes-icon linkedin"></i></a>
                </div>
            </div>
        </>
    )
}