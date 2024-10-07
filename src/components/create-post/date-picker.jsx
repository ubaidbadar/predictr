import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function DatePicker(props) {
    return (
        <>
            {props.getHeader('Date')}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
            </LocalizationProvider>
            <div className="Modal-Footer">
                <button className="btn-primary">Done</button>
            </div>
        </>
    )
}