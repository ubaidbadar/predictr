import React from "react";
import CheckCircle from "../../../icons-v2/CheckCircle";
import CrossCircle from "../../../icons-v2/CrossCircle";
import styles from './Movement.module.scss';
import moment from "moment/moment";
import Clock from "../../../icons-v2/Clock";
import MinusCircle from "../../../icons-v2/MinusCircle";


const Movement = ({ percentage = '0', accurate = true, guess_date, actual_change,points }) => {
    const guessDate = moment(guess_date);
    const days_left = guessDate.diff(moment(), 'days');
    const is_day_left = days_left > 0;
    const leftHTML = is_day_left && <span className='me-auto text-normal d-flex gap-1 align-items-center'><Clock />{days_left} day{days_left > 1 && 's'} left</span>
    const isCompetition = window.location.href.includes('/competition')
    if(actual_change === 0) return (
        <div className={`${styles.root} text-normal ${styles.daysLeft}`}>
            <MinusCircle />
            <b>No movement</b>
            {leftHTML}
        </div>
    )
    
    return (
        <div className={`${styles.root} ${is_day_left ? styles.daysLeft : ''} text-accent-${accurate ? 3 : 2}`}>
            {isCompetition ? <span className={styles.points} aria-details={points.toFixed(2)} /> : (accurate ? <CheckCircle /> : <CrossCircle />)}
            <span className="fw-semibold">{accurate ? <>{percentage}% Accura</> : 'Inaccura'}{is_day_left ? 'cy' : 'te'}</span>
            {leftHTML}
        </div>
    )
}

export default Movement;
