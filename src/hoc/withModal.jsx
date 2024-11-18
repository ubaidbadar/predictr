import useShow from "../hooks/useShow"

export default function withModal(Component) {
    return ({ component, state, ...props }) => {
        const tools = useShow(state);
        return (
            <>
                {component(tools)}
                {tools.state && <Component {...props} {...tools} />}
            </>
        )
    }
}