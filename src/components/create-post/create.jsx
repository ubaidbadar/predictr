import { useState } from "react"
import MakePrediction from "./make-prediction";
import Stock from "./stock";
import Chevron from "../../icons-v2/chevron";

const pages = {
    0: MakePrediction,
    1: Stock,
    2: MakePrediction,
}


export default function Create(props) {
    const [form, setForm] = useState({
        stock_symbol: '',
        guess_date: '',
        description: '',
        estimated_direction: 'Up',
        estimated_change_percent: '',
        stock_name: '',
        onlyForSubscribers: props.premium ? true : false,
    });

    const [page, setPage] = useState(0), [loading, setLoading] = useState(false);
    const Current = pages[page], newProps = {...form, setForm: update => setForm({...form, ...update}), setPage, back: () => setPage(0)}
    newProps.title = <button className="btn-text text-gray-0" onClick={newProps.back}><Chevron className="rotate-90" /> Make a Prediction</button>;
    
    return (
        <>
            <Current {...newProps} />
        </>
    )
}