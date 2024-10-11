import { useEffect, useState } from "react";

export default function useQuery(size = 991) {
    const [isMobile, setMobile] = useState(window.innerWidth <= size);
    useEffect(() => {
        let device = isMobile;
        const cb = () => {
            const current = window.innerWidth <= size;
            if(device !== current) {
                setMobile(current);
                device = current;
            }
        };
        cb();
        window.addEventListener('resize', cb);
        return () => window.removeEventListener('resize', cb);
    }, [size]);
    return isMobile;
}