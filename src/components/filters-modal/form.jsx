import RangePicker from "../../ui/range-picker";
import TextField from "../../ui/textfield";
import Calendar from "../../icons/calendar";
import Magnifier from "../../icons/magnifier";
import { useState } from "react";
import updateSearchParams from "../../lib/updateSearchParams";


export default function Form() {
    const search = new URLSearchParams(window.location.search);
    const d = {
        accuracy: "",
        start_date: "",
        end_date: "",
        hashtags: "",
    }
    const values = {};
    for (const key of Object.keys(d)) values[key] = search.get(key) || "";
    return <Main d={d} values={values} />
}

function Main(props) {
    const [values, setValues] = useState(props.values);
    const onChange = e => setValues({ ...values, [e.target.name]: e.target.value });
    return (
        <>
            <TextField name="accuracy" value={values.accuracy} onChange={onChange} placeholder="Enter manually accuracy" title="Accuracy (%)" />
            <RangePicker
                onChange={e => {
                    setValues({ ...values, start_date: e.start, end_date: e.end })
                }}
                component={tools => (
                    <div className="flex-col gap-3">
                        <TextField
                            title="Date Range"
                            onFocus={tools.open}
                            readOnly right={<Calendar />}
                            placeholder="From"
                            value={values.start_date}
                            name="start_date"
                        />
                        <TextField
                            value={values.end_date}
                            onFocus={tools.open}
                            readOnly
                            right={<Calendar />}
                            placeholder="To"
                            name="end_date"
                        />
                    </div>
                )}
            />
            <TextField name="hashtags" onChange={onChange} value={values.hashtags} left={<Magnifier />} placeholder="#tags" title="HashTags" />
            <div className="Modal-Footer gap-5">
                <button type="button" className="btn-text" onClick={() => {
                    setValues(props.d);
                    updateSearchParams(props.d)
                }}>Reset</button>
                <button className="btn-primary">Save</button>
            </div>
        </>
    )
}