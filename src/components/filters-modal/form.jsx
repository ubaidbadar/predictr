import RangePicker from "../../ui/range-picker";
import TextField from "../../ui/textfield";
import Calendar from "../../icons/calendar";
import Magnifier from "../../icons/magnifier";
import useFilter from "./useFilter";
import BoxSelect from "../../ui/boxselect";



export default function Form() {
    const f = useFilter(), values = ["30-50%", "50-70%", "70% & Up"]
    return (
        <>
            <div className="flex-wrap flex gap-2">
                <TextField name="accuracy" className="w-full" value={f.accuracy} onChange={f.onChange} placeholder="Enter manually accuracy" title="Accuracy (%)" />
                {values.map(value => (
                    <BoxSelect
                        title={value}
                        value={value}
                        checked={f.accuracy == value}
                        onChange={() => f.onUpdate({ accuracy: value })}
                        name="accuracy"
                        className="flex-1"
                        key={value}
                    />
                ))}
                {/* <BoxSelect title="30-50%" value="30-50%" checked={f.accuracy == "30-50%"} /> */}
            </div>
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