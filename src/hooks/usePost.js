import { useState } from "react";
import axios from '../config/axios';
import getAxiosMessage from "../lib/getAxiosMessage";

export default function usePost() {
    const [state, setState] = useState({});
    const submit = ({ cb, done, ...options }) => {
        if (state.loading) return;
        setState({ loading: true })
        axios(options)
            .then(res => {
                cb && cb(res);
                setState({ data: res, done: true });
                if (done) setTimeout(() => setState({ data: res }), 300)
            })
            .catch(err => setState({ err: getAxiosMessage(err) }))
    }
    return { ...state, submit }
}