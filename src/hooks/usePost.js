import { useState } from "react";
import axios from '../config/axios';
import getAxiosMessage from "../lib/getAxiosMessage";

export default function usePost() {
    const [state, setState] = useState({});
    const submit = (options) => {
        if (state.loading) return;
        setState({ loading: true })
        axios(options)
            .then(res => setState({ data: res }))
            .catch(err => setState({ err: getAxiosMessage(err) }))
    }
    return {...state, submit}
}