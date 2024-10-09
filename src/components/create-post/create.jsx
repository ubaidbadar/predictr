import { useState } from "react"
import MakePrediction from "./make-prediction";
import Stock from "./stock";
import Chevron from "../../icons-v2/chevron";
import Movement from "./movement";
import DatePicker from "./date-picker";
import Submit from "./submit";

const pages = {
    0: MakePrediction,
    1: Stock,
    2: Movement,
    3: DatePicker
}



export default function Create(props) {
    const [form, setForm] = useState({
        stock_symbol: '',
        guess_date: "",
        description: '',
        estimated_direction: 'Up',
        estimated_change_percent: '',
        stock_name: '',
        onlyForSubscribers: props.premium ? true : undefined,
    });

    const [page, setPage] = useState(0);
    const Current = pages[page], newProps = {
        ...form,
        setPage,
        back: () => setPage(0),
        setForm: update => setForm({ ...form, ...update }),
    }
    newProps.getHeader = title => (
        <h3 className="flex-center gap-1">
            <button className="btn-text text-light-3" onClick={newProps.back}><Chevron className="rotate-90" /> Make a Prediction</button> / {title}
        </h3>
    );
    newProps.onChange = e => newProps.setForm({ [e.target.name]: e.target.value });
    return (
        <>
            <Current {...newProps} />
            {page === 0 && <Submit form={form} />}
        </>
    )
}