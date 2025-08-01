import "./CharacterButton.css";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import findCharacter from "../../assets/sounds/find.mp3";
import { useTranslation } from "react-i18next";

const CharacterButton = ({ hidingIn, onCharacterUnlock }) => {
    const { t } = useTranslation();
    const [unlocked, setUnlocked] = useState(false);

    const soundCharacterFind = new Audio(findCharacter);

    const handleButtonClick = () => {
        if (!unlocked) {
            setUnlocked(true);
            onCharacterUnlock(hidingIn);

            toast.success(t("navbar.newCharacterUnlocked"), {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });

            soundCharacterFind.play();
        }
    };

    return (
        <>
            <span onClick={handleButtonClick} className={`${unlocked || "shine"}`}>
                {hidingIn}
            </span>
        </>
    );
}

export default CharacterButton;