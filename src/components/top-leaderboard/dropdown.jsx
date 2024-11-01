import Select, { Item } from "../../ui/select";

export default function DropDown(props) {
    return (
        <Select
            onChange={e => props.onParamsChange({ show: e.target.value })}
            component={(props, value) => {
                console.log(props)
                return (
                    <button {...props} className="btn-text btn-select capitalize">
                        {value.toLowerCase()}
                    </button>
                )
            }}
            {...props}
        >
            <Item value="ALL">All</Item>
            <Item value="MONTH">Month</Item>
            <Item value="WEEK">Week</Item>
        </Select>
    )
}