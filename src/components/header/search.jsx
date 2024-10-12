import Magnifier from '../../icons/magnifier';
import Pluse from '../../icons/plus';
import Search from '../../ui/search';
import styles from './search.module.scss';

const S = (props) => {
    return (
        <>
            <Search id="Nav-Search" className={styles.root} placeholder="Search Predictr...">
                {props.isMobile && (
                    <span className='btn-icon absolute right-0'>
                        <Pluse className="rotate-45" />
                    </span>
                )}
            </Search>
            {props.isLoggedIn && props.isMobile && (
                <label htmlFor='Nav-Search' className='btn-icon text-gray-0 md:hidden no-space'>
                    <Magnifier />
                </label>
            )}
        </>
    )
}

export default S;