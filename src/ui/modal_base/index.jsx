import Portal from "../../hoc/portal";

export default function ModalBase({ className, close, children, Root = "div", open, id, title, state, design=0, ...props }) {
    return (
        <Portal id="Modals">
            <div
                className={`Dialog ${state} Modal-${design}`}
                onClick={e => e.target === e.currentTarget && close()}
            >
                <Root className={`Dialog-Main ${className}`} {...props} other={typeof Root === "string" ? "" : { close }}>{children}</Root>
            </div>
        </Portal>
    )
}