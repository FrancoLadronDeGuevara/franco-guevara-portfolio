import { useEffect, useState } from "react";
import CharacterButton from "../../CharacterButton/CharacterButton";
import profile8bits from "../../../assets/profile/profile8bits.png";
import profile from "../../../assets/profile/profile.png";
import "./Presentation.css";
import { useTranslation } from "react-i18next";

const GLITCH_INTERVAL = 3000;
const GLITCH_DURATION = 500;

export default function Presentation({ onCharacterUnlock }) {
    const { t } = useTranslation();
    const [currentImage, setCurrentImage] = useState(profile);
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsGlitching(true);

            setTimeout(() => {
                setCurrentImage(prev => prev === profile8bits ? profile : profile8bits);
                setIsGlitching(false);
            }, GLITCH_DURATION);
        }, GLITCH_INTERVAL);

        return () => clearInterval(interval);
    }, []);

    const renderGlitchImages = () => {
        return Array(4).fill(0).map((_, index) => (
            <div
                key={index}
                className="glitch-img"
                style={{
                    backgroundImage: `url(${currentImage})`,
                    filter: currentImage === profile ? 'brightness(0.9) contrast(1.4)' : 'none'
                }}
            />
        ));
    };

    return (
        <div className="presentation-container">
            <div className="parallax background"></div>
            <div className="parallax background-two"></div>

            <div className="presentation-content">
                <div className="presentation-text">
                    <h3 className="presentation-title-top">{t("presentation.fullstackDeveloper")}</h3>
                    <h1 className="presentation-title-center">FRANCO GUEVARA</h1>
                    <h6 className="presentation-title-bottom">
                        <span>{t("presentation.versatileDeveloper")}</span>
                        <CharacterButton hidingIn={t("presentation.creativeProgrammer")} onCharacterUnlock={onCharacterUnlock} />
                    </h6>
                </div>

                <div className={`presentation-image-container glitch-effect ${isGlitching ? 'glitch-active' : ''}`}>
                    {renderGlitchImages()}
                </div>
            </div>
        </div>
    );
}