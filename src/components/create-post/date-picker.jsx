import { useState } from "react";
import { DateCalendar } from "@mui/x-date-pickers";
import dayjs from "dayjs";



const date = dayjs(), regex = /0|6/;
let min = date.add(2, 'day');

if(regex.test(min.day())) min = min.add(1, 'day');
if(regex.test(min.day())) min = min.add(1, 'day');

const disabled = date => regex.test(date.day());

export default function DatePicker(props) {
    const [date, setDate] = useState(props.guess_date ? dayjs(props.guess_date) : min);
    return (
        <>
            {props.getHeader('Date')}
            <DateCalendar className="m-auto scale-110 origin-top"
                onChange={setDate}
                minDate={min}
                value={date}
                shouldDisableDate={disabled}
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