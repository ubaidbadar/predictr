import Magnifier from '../../icons/magnifier';
import Search from '../../ui/search';
import styles from './search.module.scss';

const S = () => {
    return (
        <>
            <Search id="Nav-Search" className={styles.root} placeholder="Search Predictr..." />
            <label htmlFor='Nav-Search' className='btn-icon text-gray-0 md:hidden no-space'>
                <Magnifier />
            </label>
        </>
    )
}

export default S;