import React, { useState } from 'react';
import Item from './Item';
import AddIcon from '../../icons-v2/AddIcon';
import CheckIcon from '../../icons-v2/CheckIcon';

const SearchItem = ({ isIncludes, ticker, company_name, ...props }) => {
    const [isAdded, setIsAdded] = useState(isIncludes);
    const onAdd = () => {
        setIsAdded(true);
        props.onAdd(err => setIsAdded(false));
    }
    const onRemove = () => {
        setIsAdded(false);
        props.onRemove();
    }
    return (
        <Item
            ticker={ticker}
            company_name={company_name}
            action={
                isAdded ?
                    <button className='btn-text btn small' onClick={onRemove}>Added<CheckIcon /></button>
                    : <button className='btn-text btn text-accent-4 small' onClick={onAdd}>Add<AddIcon className='smaller' /></button>
            }
        />
    )
}

export default SearchItem;