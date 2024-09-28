import { useState } from "react";
import Input from "./input";

export default function Email({onChange, ...props}) {
    const [className, setClass] = useState("");
    return (
        <Input
            onChange={e => {
                const value = e.target.value, valid = value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/), newClass = valid ? "valid" : "invalid";
                if(newClass !== className) setClass(newClass);
                onChange && onChange(e)
            }}
            inputClass={className}
            {...props}
        />
    )
}