import React from 'react';
import AddIcon from '../../icons-v2/AddIcon';
import SearchField from '../../ui-v2/SearchField/SearchField';
import styles from './SearchWrapper.module.scss';

const SearchWrapper = ({ className = '', onClear, component, isRounded, ...props }) => (
    <SearchField className={`${isRounded ? styles.rounded : styles.root} ${className} small flex-1`} {...props}>
        {props.value && (
            <button className={`btn-icon btn smaller ${isRounded ? 'position-absolute start-0 ms-2 top-50 translate-middle-y' : 'no-spacing'}`} onClick={onClear} type='button'>
                <AddIcon className='rotate-45 text-accent-4' />
            </button>
        )}
    </SearchField>
)

export default SearchWrapper;