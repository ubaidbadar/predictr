import axios from "../config/axios";
import { useState } from "react";

const useLoad = (api = '/', cb) => {
    const [isLoading, setLoading] = useState(false);
    const load = () => {
        if (isLoading) return;
        setLoading(true);
        axios.get(api)
            .then(res => {
                setLoading(false);
                cb(res.data);
            })
            .catch(err => console.log(err))
    }
    return { isLoading, load }
}

export default useLoad;