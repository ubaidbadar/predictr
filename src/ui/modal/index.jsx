
import Pluse from "../../icons/plus";
import ModalBase from "../modal_base";

export default function Modal({ title, id, children, ...props }) {
    const mid = id || title;
    return (
        <ModalBase {...props} className="Modal-0">
            <div className="Modal-Header">
                <h3>{title}</h3>
                <button onClick={props.close} id={mid} className="btn-close" type="button"><Pluse /></button>
            </div>
            {children}
        </ModalBase>
    )
}