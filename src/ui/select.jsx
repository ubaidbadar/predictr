import { useState } from "react";
import DropDown from "./drop-down";
import Check from "../icons/check";

export default function Select({ onChange, value = "", ...props }) {
    const [v, setValue] = useState(value);
    return (
        <DropDown
            {...props}
            value={v}
            onClick={e => {
                setValue(e.target.value)
                onChange && onChange(e);
            }}
        />
    )
}

export const Item = ({ children, ...props }) => (
    <button {...props}>
        {props.className === 'active' && <Check /> } {children}
    </button>
)