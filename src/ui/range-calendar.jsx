import { useState } from "react"
import useShow from "../hooks/useShow";
import { Portal } from "@mui/material";

export default function CalendarPicker({ component, ...props }) {
    const [date, setDate] = useState(), tools = useShow();
    return (
        <>
            {component && component(tools.open, date)}
            {tools.state && (
                <Portal>
                    <div className="Dialog" onClick={e => e.currentTarget === e.target && tools.close()}>
                        <DateRange
                            {...props}
                            value={date}
                            className="bg-surface rounded-3"
                            onChange={date => {
                                setDate(date)
                                tools.close();
                            }}
                        />
                    </div>
                </Portal>
            )}
        </>
    )
}