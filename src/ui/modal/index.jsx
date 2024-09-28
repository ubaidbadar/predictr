
import Pluse from "../../icons/plus";
import ModalBase from "../modal_base";

export default function Modal({ title, id, children }) {
    const mid = id || title;
    return (
        <ModalBase>
            <div className="flex-between gap-4 mb-4">
                <h3 className="font-medium text-xl">{title}</h3>
                <button id={mid} className="btn-icon no-space rotate-45" type="button"><Pluse /></button>
            </div>
            {children}
        </ModalBase>
    )
}