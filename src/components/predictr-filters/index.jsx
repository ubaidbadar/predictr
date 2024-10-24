import { DateCalendar } from '@mui/x-date-pickers';
import Calendar from '../../icons/calendar';
import Magnifier from '../../icons/magnifier';
import styles from './styles.module.scss';

export default function PredictrFilters() {
    return (
        <>
            <form className={`${styles.root}`}>
                <label>
                    Accuracy (%)
                    <input type="number" placeholder='Enter your accuracy' min={1} />
                </label>
                <div>
                    Date Range
                    <button type='button'>From <Calendar /></button>
                    <button type='button'>To <Calendar /></button>
                </div>
                
                <label className={styles.tag}>
                    HashTags
                    <Magnifier />
                    <input type="text" placeholder='#tags' />
                </label>
            </form>
        </>
    )
}