import { useCallback, useEffect, useState } from "react";

export default function useShow(className) {
    const [state, setState] = useState(className);
    const close = useCallback(() => {
        setState("close");
        window.removeEventListener('popstate', close)
        setTimeout(() => {
            setState("");
        }, 300);
    }, [])
    useEffect(() => {
        return () => window.removeEventListener('popstate', close)
    }, [])
    return {
        state,
        className,
        open: () => {
            setState("active");
            window.addEventListener('popstate', close)
        },
    }
}