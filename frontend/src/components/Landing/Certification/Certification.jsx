import { certificationList } from "./Certification.js"
import "./Certification.css"
import { useState } from "react"

export default function Certification() {
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
                <span>Certificates</span>
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