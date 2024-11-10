import Calendar from '../../icons/calendar';
import Magnifier from '../../icons/magnifier';
import styles from './styles.module.scss';
import getValues from '../../hoc/form/getValues';
import useFilter from '../filters-modal/useFilter';
import updateSearchParams from '../../lib/updateSearchParams';
import RangePicker from '../../ui/range-picker';

export default function PredictrFilters() {
    const t = useFilter();
    return (
        <>
            <form className={`${styles.root}`}
                onSubmit={e => {
                    e.preventDefault();
                    const values = getValues(e.target).values;
                    updateSearchParams(values);
                }}
            >
                <label>
                    Accuracy (%)
                    <input type="number" value={t.accuracy} onChange={t.onChange} name='accuracy' placeholder='Enter your accuracy' min={1} />
                </label>
                <div>
                    Date Range
                    <RangePicker
                        onChange={t.onRangeChange}
                        component={tools => (
                           <>
                            <label className='w-full relative flex-center'>
                                <input name='start_date' value={t.start_date} readOnly onClick={tools.open} onFocus={tools.open} placeholder='From' />
                                <Calendar className="w-5 absolute right-3" />
                            </label>
                            <label className='w-full relative flex-center'>
                                <input name='end_date' value={t.end_date} readOnly onClick={tools.open} onFocus={tools.open} placeholder='To' />
                                <Calendar className="w-5 absolute right-3" />
                            </label>
                           </>
                        )}
                    />
                </div>

                <label className={styles.tag}>
                    HashTags
                    <Magnifier />
                    <input name='hashtags' value={t.hashtags} onChange={t.onChange} type="text" placeholder='#tags' />
                </label>
                <button className='btn-primary text-sm'>Apply</button>
            </form>
        </>
    )
}