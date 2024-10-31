import { useLayoutEffect, useRef } from "react"
import setPosition from "../lib/setPosition";

const usePosition = (btnRef, isActive = true, deps = []) => {
    const childRef = useRef();
    useLayoutEffect(() => {
        if (!isActive || !childRef.current || !btnRef || !btnRef.current) return;
        const unsubscribe = setPosition(btnRef.current, childRef.current)
        return unsubscribe
    }, [...deps, isActive])

    return childRef;
}

export default usePosition;