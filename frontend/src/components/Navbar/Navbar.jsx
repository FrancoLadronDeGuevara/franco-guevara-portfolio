import "./Navbar.css";
import Logo from "../../assets/LogoFranco.png";


export default function Navbar() {
    return (
        <>
            <div className="container-navbar">
                <div className="francoGuevaraLogo">
                    <img src={Logo} alt="" className="navbar-img" />
                </div>
                <div className="container-switch">
                    
                </div>

            </div>
        </>
    )
}