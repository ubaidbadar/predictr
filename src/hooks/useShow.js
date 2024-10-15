import { useCallback, useEffect, useState } from "react";

export default function useShow(classN) {
    const [className, setClass] = useState(classN)
    const close = useCallback(() => {
        setClass("close");
        setTimeout(() => {
            setClass("");
        }, 300);
    }, [])
    useEffect(() => {
        return () => window.removeEventListener('popstate', close)
    }, [])
    return {
        className,
        close,
        open: () => {
            setClass("open");
            window.addEventListener('popstate', close)
        },
    }
}