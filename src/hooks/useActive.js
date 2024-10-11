import { useEffect, useRef, useState } from "react";

export default function useActive() {
    const [status, setStatus] = useState(""), btnRef = useRef();
    useEffect(() => {
        const btn = btnRef.current;
        if (!btn) return;
        let status = ""
        const cb = (e) => {
            if (status) {
                status = "";
                setStatus("normal")
                setTimeout(() => {
                    setStatus("")
                }, 200)
            }
            else if (e.target === btn || btn.contains(e.target)) {
                status = "active";
                setStatus(status)
            }
        }
        window.addEventListener('click', cb)
        return () => {
            window.removeEventListener('click', cb)
        }
    }, [btnRef])
    return { status, btnRef };
}