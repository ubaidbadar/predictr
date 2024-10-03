
import Pluse from "../../icons/plus";
import ModalBase from "../modal_base";

export default function Modal({ title, id, children, ...props }) {
    const mid = id || title;
    return (
        <ModalBase {...props}>
            <div className="flex-between gap-4 mb-4">
                <h3 className="font-medium text-xl">{title}</h3>
                <button onClick={props.close} id={mid} className="btn-icon no-space rotate-45" type="button"><Pluse /></button>
            </div>
            {children}
        </ModalBase>
    )
}