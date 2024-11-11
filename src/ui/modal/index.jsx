import ModalBase from "../modal_base";
import ModalHeader from "./header";

export default function Modal({ children, footer, ...props }) {
    return (
        <ModalBase {...props}>
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