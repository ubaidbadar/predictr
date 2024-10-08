import { useState } from "react";
import axios from '../config/axios';
import getAxiosMessage from "../lib/getAxiosMessage";

export default function usePost() {
    const [state, setState] = useState({});
    const submit = (api, method = "post", data) => {
        if (state.loading) return;
        setState({ loading: true })
        axios[method](api, data)
            .then(res => setState({ data: res }))
            .catch(err => setState({ err: getAxiosMessage(err) }))
    }
    return {...state, submit}
}