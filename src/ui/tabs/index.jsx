import { useState } from "react";

const Tabs = ({ options = [], value, className = "", onTabChange }) => {
    const [title, setTitle] = useState(value || options[0]), index = options.findIndex(option => option === title), width = 100 / options.length;
    const onChange = (option, index) => {
        setTitle(option);
        onTabChange && onTabChange(option, index)
    }
    return (
        <div className={`border-1 border-light-0 rounded-[0.715em] flex relative ${className}`}>
            <div className="absolute rounded-inherit transition-all bg-light-1 top-0 bottom-0"
                style={{
                    left: `${width * index}%`,
                    width: `${width}%`
                }}
            />
            {options.map((option, i) => (
                <button key={i}
                    disabled={index === i}
                    onClick={() => onChange(option, i)}
                    className={`py-2 fs-inherit flex-1 z-1 ${index === i ? "cursor-text font-semibold" : "btn-text text-dark-0"}`}
                >{option}</button>
            ))}
        </div>
    )
}

export default Tabs;