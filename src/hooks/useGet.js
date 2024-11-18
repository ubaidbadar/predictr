import { useEffect, useState } from "react"
import axios from "../config/axios";
import Spinner from "../ui/spinner";
import getAxiosMessage from "../lib/getAxiosMessage";

const useGet = (api, params = {}, boolean = true, cb) => {
    const [state, setStatus] = useState({ Loader: boolean ? Spinner : undefined, params });
    const { data, err, Loader, other } = state;
    const onParamsChange = newParams => {
        const uParams = { ...state.params, ...newParams }
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
    }, [boolean, api]);

    return {
        data,
        Loader,
        err,
        other,
        onParamsChange, params: state.params,
        onUpdate: newData => setStatus({ data: { ...data, ...newData }, params: state.params }),
        setStatus
    };
}


export default useGet;