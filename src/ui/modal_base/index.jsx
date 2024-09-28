import Portal from "../../hoc/portal";

export default function ModalBase({ className, close, children }) {
    return (
        <Portal id="Modals">
            <div
                className={`Dialog ${className}`}
                onClick={e => e.target === e.currentTarget && close()}
            >
                <div>{children}</div>
            </div>
        </Portal>
    )
}