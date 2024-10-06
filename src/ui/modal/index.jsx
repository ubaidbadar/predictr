import ModalBase from "../modal_base";
import ModalHeader from "./header";

export default function Modal({ title, id, children, ...props }) {
    const mid = id || title;
    return (
        <ModalBase {...props} id={mid} className="Modal-0">
            <ModalHeader {...props} id={mid}  />
            {children}
        </ModalBase>
    )
}