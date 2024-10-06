import Pluse from "../../icons/plus";

export default function ModalHeader(props) {
    return (
        <div className='Modal-Header'>
            <h3>{props.title}</h3>
            <button type="button" onClick={props.close} className='btn-close'><Pluse /></button>
        </div>
    )
}