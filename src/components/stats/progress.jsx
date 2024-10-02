import times from "./times";
import styles from './progress.module.scss';

export default function Progress(props) {
    const getHTML = key => times.map(tf => <p key={tf}>{(props[tf] || {})[key]}</p>);
    return (
        <div className={styles.root}>
            <small>Profile Stats</small>
            {times.map(time => <small key={time}>{time}</small>)}
            <b>Rank</b>
            {getHTML('position')}
            <b>Predictions (#)</b>
            {getHTML('number_guesses')}
            <b>Accuracy (%)</b>
            {getHTML('guess_accuracy')}
        </div>
    )
}