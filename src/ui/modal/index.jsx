import ModalBase from "../modal_base";
import ModalHeader from "./header";

export default function Modal({ id, children, design = 0, footer, ...props }) {
    const mid = id || props.title;
    return (
        <ModalBase {...props} id={mid} className={`Modal-${design}`}>
            <ModalHeader {...props} id={mid} />
            {children}
            {footer && (
                <div className="Modal-Footer">
                    {footer(props.close)}
                </div>
            )}
        </ModalBase>
    )
}