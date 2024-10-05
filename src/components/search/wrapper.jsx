import React from 'react';
import Plus from '../../icons/plus';
import Search from '../../ui/search';
import styles from './wrapper.module.scss';

const SearchWrapper = ({ className = '', onClear, component, isRounded, ...props }) => (
    <Search className={`${isRounded ? styles.rounded : styles.root} ${className} small flex-1`} {...props}>
        {props.value && (
            <button className={`btn-icon btn smaller ${isRounded ? 'position-absolute start-0 ms-2 top-50 translate-middle-y' : 'no-spacing'}`} onClick={onClear} type='button'>
                <Plus className='rotate-45 text-accent-4' />
            </button>
        )}
    </Search>
)

export default SearchWrapper;