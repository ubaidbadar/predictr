import useBoard from "../hooks/useBoard"

export default function withBoard(Component) {
    return props => {
        const tools = useBoard();
        return <Component {...tools} {...props} />
    }
}