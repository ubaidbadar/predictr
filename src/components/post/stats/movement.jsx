import React from "react";
import styles from './movement.module.scss';
import moment from "dayjs";
import MinusCircle from "../../../icons/minus-circle";


const Movement = ({ percentage = '0', accurate = true, guess_date, actual_change }) => {
    const guessDate = moment(guess_date);
    const days_left = guessDate.diff(moment(), 'days');
    
    if(actual_change === 0) return (
        <div className={`${styles.root} bg-light-2`} about={days_left}>
            <MinusCircle />
            No movement yet
            
        </div>
    )
    
    return (
        <div className={styles.root} about={days_left}>
            {/* <span className="fw-semibold mr-auto">{accurate ? <>{percentage}% Accura</> : 'Inaccura'}{is_day_left ? 'cy' : 'te'}</span> */}
            {/* {days_left}d */}
        </div>
    )
}

export default Movement;
