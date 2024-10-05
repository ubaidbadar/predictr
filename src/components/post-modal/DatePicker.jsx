import React, { useState } from "react";
import DP from "../../../ui-v2/DatePicker/DatePicker";
import PickersUtilsProvider from "../../../ui-v2/PickersUtilsProvider/PickersUtilsProvider";
import Modal from "../../ui/modal";



const DatePicker = (props) => {
    const [date, setDate] = useState(props.form.guess_date ? new Date(props.form.guess_date) : new Date());
    const disableWeekends = date => {
        const day = date.getDay();
        if(day === 0 || day === 6) return true;
    }
    return (
        <Modal
            className='no-animation'
            close={props.back}
            actions={() => <button type="button" onClick={() => {
                props.setStatus({
                    is_model: true,
                    form: { ...props.form, guess_date: date.toISOString() },
                    no_animation: true
                })
            }} className="btn btn-primary">Done</button>}
            title={props.getTitle('Date')}
        >
            <div className="mx-auto">
                <PickersUtilsProvider>
                    <DP open={true}
                        variant='static'
                        value={date}
                        onChange={setDate}
                        minDate={props.min_date}
                        maxDate={props.max_date}
                        shouldDisableDate={disableWeekends}
                    />
                </PickersUtilsProvider>

            </div>
        </Modal>
    )
}

export default DatePicker;
