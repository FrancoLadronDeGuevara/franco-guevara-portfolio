import "./Footer.css"

export default function Footer(){
    return(
        <>  
        <hr />
            <div className="container-footer">
                <p>
                    ©2023 Franco Guevara
                </p>

                <div>
                    <a href="https://github.com/FrancoLadronDeGuevara" target={"_blank"} rel={"noreferrer"}><i className="nes-icon github is-medium"></i></a>
                    <a href="https://www.facebook.com/FrancoDeGuevara/" target={"_blank"} rel={"noreferrer"}><i className="nes-icon facebook is-medium"></i></a>
                    <a href="" target={"_blank"} rel={"noreferrer"}><i className="nes-icon whatsapp is-medium"></i></a>
                    <a href="https://www.linkedin.com/in/franco-guevara/" target={"_blank"} rel={"noreferrer"}><i className="nes-icon linkedin is-medium"></i></a>
                </div>
            </div>
        </>
    )
}