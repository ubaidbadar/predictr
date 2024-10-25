import { DateCalendar } from '@mui/x-date-pickers';
import Calendar from '../../icons/calendar';
import Magnifier from '../../icons/magnifier';
import styles from './styles.module.scss';
import CalendarPicker from '../../ui/Calendar';
import dayjs from 'dayjs';
import getValues from '../../hoc/form/getValues';

export default function PredictrFilters() {
    return (
        <>
            <form className={`${styles.root}`} onSubmit={e => {
                e.preventDefault();
                const values = getValues(e.target).values;
                console.log(values)
            }}>
                <label>
                    Accuracy (%)
                    <input type="number" name='accuracy' placeholder='Enter your accuracy' min={1} />
                </label>
                <div>
                    Date Range
                    <CalendarPicker
                        component={(open, date) => (
                            <label className='w-full relative flex-center'>
                                <input name='start_date' value={date ? date.format('YYYY/MM/DD') : ""} readOnly onClick={open} onFocus={open} placeholder='From' />
                                <Calendar className="w-5 absolute right-3" />
                            </label>
                            // {date ? date.toISOString() : 'From'} <Calendar />
                        )}
                    />
                    <CalendarPicker
                        component={(open, date) => (
                            <label className='w-full relative flex-center'>
                                <input name='end_date' value={date ? date.format('YYYY/MM/DD') : ""} readOnly onClick={open} onFocus={open} placeholder='To' />
                                <Calendar className="w-5 absolute right-3" />
                            </label>
                            // {date ? date.toISOString() : 'From'} <Calendar />
                        )}
                    />
                </div>

                <label className={styles.tag}>
                    HashTags
                    <Magnifier />
                    <input name='hashtags' type="text" placeholder='#tags' />
                </label>
                <button className='btn-primary text-sm'>Apply</button>
            </form>
        </>
    )
}