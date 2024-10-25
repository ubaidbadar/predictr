import { useState } from "react"
import useShow from "../hooks/useShow";
import { Portal } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";

export default function CalendarPicker({ component, ...props }) {
    const [date, setDate] = useState(), tools = useShow();
    return (
        <>
            {component && component(tools.open, date)}
            {tools.className && (
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