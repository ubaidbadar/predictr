import React from "react"
import dependentTagPositionHandler from "../utility/dependentTagPositionHandler";

const useDepandentPosition = (isActive = true, deps = []) => {
    let unsubscribe = React.useMemo(() => null, []);
    const childRef = React.useRef();
    const parentRef = React.useRef();
    React.useEffect(() => {
        if (unsubscribe) unsubscribe();
        if (!isActive || !childRef.current || !parentRef.current) return;
        unsubscribe = dependentTagPositionHandler(parentRef.current, childRef.current)
    }, [...deps, isActive])

    return { childRef, parentRef };
}

export default useDepandentPosition;