import BoxField from "../../ui/boxselect";
import Input from "../../ui/input";

export default function Movement(props) {
    return (
        <>
            {props.getHeader('Movement')}
            <p className="leading-3">Trend</p>
            <div className="grid grid-cols-2 gap-5">
                <BoxField className="contain-checkbox" checked={props.estimated_direction === 'Up'} onChange={props.onChange} name="estimated_direction" title="Up" value="Up" type="radio" />
                <BoxField className="contain-checkbox" checked={props.estimated_direction === 'Down'} onChange={props.onChange} name="estimated_direction" value="Down" title="Down" type="radio" />
            </div>
            <Input type="number" min={1} name="estimated_change_percent" value={props.estimated_change_percent} onChange={props.onChange} label="Percentage (%)" />
            <div className="Modal-Footer">
                <button onClick={props.back} className="btn-primary" disabled={!props.estimated_change_percent}>Done</button>
            </div>
        </>
    )
}