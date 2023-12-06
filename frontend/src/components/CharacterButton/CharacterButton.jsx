import { useState } from 'react';
import findCharacter from "../../assets/sounds/find.mp3";

const CharacterButton = ({ hidingIn, onCharacterUnlock }) => {
    const [unlocked, setUnlocked] = useState(false);

    const soundCharacterFind = new Audio(findCharacter);

    const handleButtonClick = () => {
        if (!unlocked) {
            setUnlocked(true);
            onCharacterUnlock(hidingIn);
            soundCharacterFind.play();
        }
    };

    return (
        <>
            <span onClick={handleButtonClick}>
                {hidingIn}
            </span>
        </>
    );
}

export default CharacterButton;