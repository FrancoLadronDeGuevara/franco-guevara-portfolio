import "./Modal.css"
import fireworks from "../../assets/icons/firework.gif";

export default function Modal(){
    return <div className="container-modal">
        <p className="modal-text">THANK YOU</p>
        <img src={fireworks} className="firework-image" alt="fireworks gif image" />
    </div>
}