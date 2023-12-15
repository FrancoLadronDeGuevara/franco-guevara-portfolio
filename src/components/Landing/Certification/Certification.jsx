import "./Certification.css"
import { useState } from "react"
import { certificationList } from "./Certification.js"
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

            <section className="container-certification">
                {certificationList.map(certificate => (
                    <article key={certificate.id} className="window" onClick={() => openImage(certificate)}>
                        <img src={certificate.img} alt={`${certificate.name} image`} className="cert-image" />
                    </article>
                ))}
            </section>

            <div className={`full-image ${isImageOpen ? 'open' : ''}`} onClick={closeImage}>
                {isImageOpen && selectedCertificate && (
                    <div className="certificate">
                        <p className="certificate-title">{selectedCertificate.name}</p>
                        <img src={selectedCertificate.img} alt={`${selectedCertificate.name} image`} />
                    </div>
                )}
            </div>
        </>
    )
}