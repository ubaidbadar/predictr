import ModalBase from "../modal_base";
import ModalHeader from "./header";

export default function Modal({ id, children, ...props }) {
    const mid = id || props.title;
    return (
        <ModalBase {...props} id={mid} className="Modal-0">
            <ModalHeader {...props} id={mid}  />
            {children}
        </ModalBase>
    )
}