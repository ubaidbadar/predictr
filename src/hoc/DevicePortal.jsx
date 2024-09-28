import useQuery from "../hooks/useQuery";
import Portal from "./Portal";

export default function DevicePortal({ size, ...props }) {
    const isDevice = useQuery(size);
    return isDevice ? <Portal {...props} /> : props.children;
}