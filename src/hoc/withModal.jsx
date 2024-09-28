import useShow from "../hooks/useShow"

export default function withModal(Component) {
    return ({ component, ...props }) => {
        const tools = useShow();
        return (
            <>
                {component(tools)}
                {tools.className && <Component {...props} {...tools} />}
            </>
        )
    }
}