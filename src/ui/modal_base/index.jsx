import Portal from "../../hoc/portal";

export default function ModalBase({ className, close, children, Root = "div", open, ...props }) {
    return (
        <Portal id="Modals">
            <div
                className={`Dialog ${className}`}
                onClick={e => e.target === e.currentTarget && close()}
            >
                <Root className="Dialog-Main" {...props} other={typeof Root === "string" ? {} : { close }}>{children}</Root>
            </div>
        </Portal>
    )
}