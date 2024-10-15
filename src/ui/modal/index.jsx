import ModalBase from "../modal_base";
import ModalHeader from "./header";

export default function Modal({ children, design = 0, footer, className, ...props }) {
    return (
        <ModalBase {...props} className={`Modal-${design} ${className}`}>
            <ModalHeader {...props} />
            {children}
            {footer && (
                <div className="Modal-Footer">
                    {footer(props.close)}
                </div>
            )}
        </ModalBase>
    )
}