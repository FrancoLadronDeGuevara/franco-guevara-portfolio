import { useState } from 'react';
import findCharacter from "../../assets/sounds/find.mp3";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CharacterButton = ({ hidingIn, onCharacterUnlock}) => {
    const [unlocked, setUnlocked] = useState(false);

    const soundCharacterFind = new Audio(findCharacter);

    const handleButtonClick = () => {
        if (!unlocked) {
            setUnlocked(true);
            onCharacterUnlock(hidingIn);

            toast.success('Found one!', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "colored",
                icon: <i className='nes-icon trophy'></i>
                });

            soundCharacterFind.play();
        }
    };

    return (
        <>
            <span onClick={handleButtonClick} style={{cursor:"pointer"}}>
                {hidingIn}
            </span>
        </>
    );
}

export default CharacterButton;