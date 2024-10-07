import { useState } from "react";
import { DateCalendar } from "@mui/x-date-pickers";
import dayjs from "dayjs";



const date = dayjs(), min = date.add(2, 'day')
const shouldDisableDate = date => {
    const day = date.day();
    return day === 0 || day === 6;
}

export default function DatePicker(props) {
    const [date, setDate] = useState(props.guess_date ? dayjs(props.guess_date) : min);
    return (
        <>
            {props.getHeader('Date')}
            <DateCalendar className="m-auto"
                onChange={setDate}
                minDate={min}
                value={date}
                shouldDisableDate={shouldDisableDate}
            />
            <div className="Modal-Footer">
                <button onClick={() => {
                    props.setForm({ guess_date: date });
                    props.back();
                }} className="btn-primary">Done</button>
            </div>
        </>
    )
}