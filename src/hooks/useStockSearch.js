import axios from "../config/axios";
import { useCallback, useEffect, useState } from "react";

const hProps = {
    value: "",
    api: "stock_item",
    isInitialRequired: true
}

const useStockSearch = (props = hProps) => {
    const { value: v, api, isInitialRequired, ...params } = { ...hProps, ...props };
    const [value, setValue] = useState(v);
    const [results, setResults] = useState([]);
    const [initialResults, setInitialResults] = useState([]);

    const onClear = useCallback(() => {
        setValue('');
        setResults([])
    }, [])

    const onChange = useCallback(e => {
        const value = e.target.value;
        if (value.trim() === "") return onClear();
        setValue(value);
        axios.get(`/${api}?search=${value}`, { params })
            .then(res => setResults(res.data))
            .catch(err => console.log(err))
    }, [])

    const onAdd = item => {
        setInitialResults([item, ...initialResults]);
        setResults([item, ...results]);
        setValue(item.ticker);
    }

    useEffect(() => {
        if (isInitialRequired) {
            axios.get('/fetch_initial_list_leaderboard', { params })
                .then(res => setInitialResults(res.data.result))
        }
        if (value && value.trim() !== "") onChange({ target: { value } })
    }, []);

    return {
        value,
        results: results.length === 0 && value.trim() === '' ? initialResults : results,
        onChange,
        onClear,
        onAdd
    }

}

export default useStockSearch;