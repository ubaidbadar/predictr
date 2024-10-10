import React from "react";
import CheckCircle from "../../../icons/check-circle";
import CrossCircle from "../../../icons/cross-circle";
import styles from './movement.module.scss';
import moment from "dayjs";
import MinusCircle from "../../../icons/minus-circle";


const Movement = ({ percentage = '0', accurate = true, guess_date, actual_change,points }) => {
    const guessDate = moment(guess_date);
    const days_left = guessDate.diff(moment(), 'days');
    const is_day_left = days_left > 0;
    const isCompetition = window.location.href.includes('/competition')
    if(actual_change === 0) return (
        <div className="flex-center bg-light-2 py-4 px-5 gap-[0.375rem]">
            <MinusCircle />
            <span className="mr-auto">No Movement</span>
            {days_left}d
        </div>
    )
    
    return (
        <div className={`${styles.root} ${is_day_left ? styles.daysLeft : ''} text-accent-${accurate ? 3 : 2}`}>
            {isCompetition ? <span className={styles.points} aria-details={points.toFixed(2)} /> : (accurate ? <CheckCircle /> : <CrossCircle />)}
            <span className="fw-semibold mr-auto">{accurate ? <>{percentage}% Accura</> : 'Inaccura'}{is_day_left ? 'cy' : 'te'}</span>
            {days_left}d
        </div>
    )
}

export default Movement;
