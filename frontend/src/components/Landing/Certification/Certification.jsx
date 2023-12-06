import { certificationList } from "./Certification.js"
import "./Certification.css"
import { useState } from "react"
import CharacterButton from "../../CharacterButton/CharacterButton.jsx";

export default function Certification({onCharacterUnlock}) {
    const [isImageOpen, setImageOpen] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const openImage = (certificate) => {
        setSelectedCertificate(certificate);
        setImageOpen(true);
    };

    const closeImage = () => {
        setSelectedCertificate(null);
        setImageOpen(false);
    };

    return (
        <>
            <div className="title-box">
                <hr />
                <span><CharacterButton hidingIn="C" onCharacterUnlock={onCharacterUnlock}/>ertificates</span>
                <hr />
            </div>
            <div className="container-certification">
                {certificationList.map(certificate => (
                    <div key={certificate.id} className="window" onClick={() => openImage(certificate)}>
                        <img src={certificate.img} alt="" className="cert-image" />
                    </div>
                ))}
            </div>

            <div className={`full-image ${isImageOpen ? 'open' : ''}`} onClick={closeImage}>
                {isImageOpen && selectedCertificate && (
                    <div className="certificate">
                        <p className="certificate-title">{selectedCertificate.name}</p>
                        <img src={selectedCertificate.img} alt={selectedCertificate.name} />
                    </div>
                )}
            </div>
        </>
    )
}