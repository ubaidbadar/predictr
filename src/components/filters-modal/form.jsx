import RangePicker from "../../ui/range-picker";
import TextField from "../../ui/textfield";
import Calendar from "../../icons/calendar";
import Magnifier from "../../icons/magnifier";
import { useState } from "react";


const d = {
    title: "",
    end_date: "",
    start_date: "",
    accuracy: "",
    hashtags: ""
}

export default function Form() {
    const [values, setValues] = useState(d);
    const onChange = e => setValues({ ...values, [e.target.name]: e.target.value });
    return (
        <>
            <TextField name="accuracy" onChange={onChange} placeholder="Enter manually accuracy" title="Accuracy (%)" />
            <RangePicker
                onChange={e => {
                    console.log(e)
                    setValues({ ...values, start_date: e.start, end_date: e.end })
                }}
                component={tools => (
                    <div className="flex-col gap-3">
                        <TextField
                            title="Date Range"
                            onFocus={tools.open}
                            readOnly right={<Calendar />}
                            placeholder="From"
                            value={tools.start_date}
                            name="start_date"
                        />
                        <TextField
                            value={tools.end_date}
                            onFocus={tools.open}
                            readOnly
                            right={<Calendar />}
                            placeholder="To"
                            name="end_date"
                        />
                    </div>
                )}
            />
            <TextField onChange={onChange} value={values.hashtags} left={<Magnifier />} placeholder="#tags" title="HashTags" />
            <div className="Modal-Footer gap-5">
                <button type="button" className="btn-text" onClick={() => setValues(d)}>Reset</button>
                <button className="btn-primary">Save</button>
            </div>
        </>
    )
}