import { useEffect, useState } from "react"
import axios from "axios";
import getAxiosMessage from "../lib/getAxiosMessage";
import Spinner from "../ui/spinner";

const useGet = (api, params = {}, boolean = true, cb) => {
    const [state, setStatus] = useState({ Loader: boolean ? Spinner : undefined, params });
    const { data, err, Loader, other } = state;
    const onParamsChange = newParams => {
        const uParams = { ...params, ...newParams }
        setStatus({ Loader: Spinner, data, params: uParams });
        axios.get(api, { params: uParams })
            .then(res => {
                const data = res.data;
                cb && cb(data);
                setStatus({ data, params: uParams })
            })
            .catch(err => setStatus({ err: getAxiosMessage(err) }))
    }
    useEffect(() => {
        if (boolean) onParamsChange(params);
    }, [boolean]);

    return {
        data,
        Loader,
        err,
        other,
        onParamsChange, 
        params: state.params,
        onUpdate: newData => setStatus({ data: { ...data, ...newData }, params: state.params }),
        setStatus
    };
}


export default useGet;