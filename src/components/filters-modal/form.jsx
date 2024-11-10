import RangePicker from "../../ui/range-picker";
import TextField from "../../ui/textfield";
import Calendar from "../../icons/calendar";
import Magnifier from "../../icons/magnifier";
import useFilter from "./useFilter";



export default function Form() {
    const f = useFilter();
    return (
        <>
            <TextField name="accuracy" value={f.accuracy} onChange={f.onChange} placeholder="Enter manually accuracy" title="Accuracy (%)" />
            <RangePicker
                onChange={f.onRangeChange}
                component={tools => (
                    <div className="flex-col gap-3">
                        <TextField
                            title="Date Range"
                            onFocus={tools.open}
                            readOnly right={<Calendar />}
                            placeholder="From"
                            value={f.start_date}
                            name="start_date"
                        />
                        <TextField
                            value={f.end_date}
                            onFocus={tools.open}
                            readOnly
                            right={<Calendar />}
                            placeholder="To"
                            name="end_date"
                        />
                    </div>
                )}
            />
            <TextField name="hashtags" onChange={f.onChange} value={f.hashtags} left={<Magnifier />} placeholder="#tags" title="HashTags" />
            <div className="Modal-Footer gap-5">
                <button type="button" className="btn-text" onClick={f.reset}>Reset</button>
                <button className="btn-primary">Save</button>
            </div>
        </>
    )
}