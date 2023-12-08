import { useState, useEffect } from 'react';
import questionIcon from "../../assets/icons/question.png";
import "./Hints.css"

export default function Hints() {
    const [currentHintIndex, setCurrentHintIndex] = useState(0);

    const hints = [
        "One is hiding here!",
        "Look at number 5!",
        "¿¿¿Creative???",
        "I'm batman",
        "I love games!",
        "2D games rules!",
        "¡So much creativity!",
        "Really? Proyect's'?",
        "Contact Me!!!!!!",
        "Look my 'C'ertificates"
    ];


    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentHintIndex < hints.length - 1) {
                setCurrentHintIndex(prevIndex => prevIndex < hints.length - 1 ? prevIndex + 1 : 0);
            } else {
                clearInterval(intervalId);
            }
        }, 10000);

        return () => clearInterval(intervalId);
    }, [hints.length]);

    return (
        <div className='container-hints'>
            <img className='question-icon' src={questionIcon} alt="Question icon" />
            <span>{hints[currentHintIndex]}</span>
        </div>
    );
}

