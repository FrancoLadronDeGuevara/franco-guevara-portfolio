import "./Navbar.css";
import Logo from "../../assets/LogoFranco.png";
import terminalImg from "../../assets/icons/terminal.png"
import { useState } from "react";


export default function Navbar() {
    const [terminalOpen, setTerminalOpen] = useState(false);

    const toggleMenu = () => {
        setTerminalOpen(!terminalOpen)
    }

    return (
        <>
            <div className="container-navbar">
                <div className="francoGuevaraLogo">
                    <img src={Logo} alt="" className="navbar-img" />
                </div>
                <div className="container-switch">
                    <button className="btn-terminal" onClick={toggleMenu}><img src={terminalImg} alt="" className={`terminal-img ${terminalOpen ? 'animation-terminal-img' : ''}`} /></button>
                </div>

                <div className={`open-terminal ${terminalOpen ? 'open' : ''}`}>
                    <div className="charging-terminal">
                        <p>Texto1</p>
                        <p>Texto1</p>
                        <p>Texto1</p>
                        <p>Texto1</p>
                    </div>

                    <div className="text-terminal">
                        <input type="text" className="nes-input" placeholder="Introduce el cheat-code"/>
                        <button className="nes-btn">Enviar</button>
                    </div>
                </div>

            </div>
        </>
    )
}