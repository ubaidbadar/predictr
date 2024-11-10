import { useState } from "react";
import getSearchParams from "../../lib/getSearchParams";

const useMain = () => {
    const search = new URLSearchParams(window.location.search);
    const d = {
        accuracy: "",
        start_date: "",
        end_date: "",
        hashtags: "",
    }
    const values = {};
    for (const key of Object.keys(d)) values[key] = search.get(key) || "";
    return { d, values };
}

export default function useFilter() {
    const tools = useMain(), [values, setValues] = useState(tools.values);
    return {
        ...values,
        onChange: e => setValues({ ...values, [e.target.name]: e.target.value }),
        onRangeChange: e => setValues({ ...values, start_date: e.start, end_date: e.end }),
        reset: () => {
            setValues(tools.d);
            getSearchParams(tools.d);
        }
    }
}