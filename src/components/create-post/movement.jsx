import BoxField from "../../ui/boxselect";
import TextField from "../../ui/textfield";

export default function Movement(props) {
    const values = [3, 5, 7, 10]
    return (
        <>
            {props.getHeader('Movement')}
            <p className="leading-3">Trend</p>
            <div className="grid grid-cols-2 gap-5">
                <BoxField className="contain-checkbox" checked={props.estimated_direction === 'Up'} onChange={props.onChange} name="estimated_direction" title="Up" value="Up" type="radio" />
                <BoxField className="contain-checkbox" checked={props.estimated_direction === 'Down'} onChange={props.onChange} name="estimated_direction" value="Down" title="Down" type="radio" />
            </div>
            <div className="flex flex-wrap gap-2">
                <TextField min={1}
                    type="number"
                    className="w-full"
                    title="Percentage (%)"
                    onChange={props.onChange}
                    placeholder="Enter percentage"
                    name="estimated_change_percent"
                    value={props.estimated_change_percent}
                />
                {values.map(item => (
                    <BoxField
                        key={item}
                        value={item}
                        title={`${item}%`}
                        className="flex-1"
                        onChange={props.onChange}
                        name="estimated_change_percent"
                        checked={item == props.estimated_change_percent}
                    />
                ))}
            </div>
            <div className="Modal-Footer">
                <button onClick={props.back} className="btn-primary" disabled={!props.estimated_change_percent}>Done</button>
            </div>
        </>
    )
}