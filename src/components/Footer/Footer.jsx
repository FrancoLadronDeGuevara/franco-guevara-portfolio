import "./Footer.css"
import CharacterButton from "../CharacterButton/CharacterButton"

export default function Footer({ onCharacterUnlock }) {
    return (
        <>
            <footer className="container-footer">
                <p>
                    ©2025 <CharacterButton hidingIn="Franco" onCharacterUnlock={onCharacterUnlock} /> Guevara
                </p>
            </footer>
        </>
    )
}