import { certificationList } from "./Certification.js"
import "./Certification.css"
import { useState } from "react"

export default function Certification() {
    const [open, setOpen] = useState(false);

    const handleOpen = () =>{
        setOpen(!open)
        console.log(open)
    }

    return (
        <>
            <div className="title-box">
                <hr />
                <span>Certificados</span>
                <hr />
            </div>
            <div className="container-certification">
                {certificationList.map(certificate => (
                    <div key={certificate.id} className="window">
                        <img src={certificate.img} alt="" className="cert-image" onClick={handleOpen}/>
                    </div>
                ))}

            </div>
        </>
    )
}