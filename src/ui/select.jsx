import { useMemo, useState } from "react";
import DropDown from "./drop-down";

export default function Select({ onChange, ...props }) {
    const [value, setValue] = useState("");
    return (
        useMemo(() => (
            <DropDown {...props}
                value={value}
                onClick={e => {
                    setValue(e.target.value)
                    onChange && onChange(e);
                }}
            />
        ), [props])
    )
}

export const Item = (props) => <button {...props} />