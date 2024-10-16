import { useCallback, useEffect, useState } from "react";

export default function useShow(classN) {
    const [className, setClass] = useState(classN);
    const close = useCallback(() => {
        setClass("close");
        window.removeEventListener('popstate', close)
        setTimeout(() => {
            setClass("");
        }, 300);
    }, [])
    useEffect(() => {
        return () => window.removeEventListener('popstate', close)
    }, [])
    return {
        close,
        className,
        open: () => {
            setClass("active");
            window.addEventListener('popstate', close)
        },
    }
}