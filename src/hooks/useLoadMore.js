import axios from "axios";
import { useState } from "react";

const useLoadMore = (api = '/', cb) => {
    const [isLoading, setIsLoading] = useState(false);
    const loadMore = () => {
        if (isLoading) return;
        setIsLoading(true);
        axios.get(api)
            .then(res => {
                setIsLoading(false);
                cb(res.data);
            })
            .catch(err => console.log(err))
    }
    return { isLoading, loadMore }
}

export default useLoadMore;