import React from 'react';
import useLoad from '../../../hooks/useLoad';
import Spinner from '../../../ui/spinner';

const Load = ({ api, onLoad, title, className = '', guard }) => {
    const { isLoading, load } = useLoad(api, onLoad);
    return (
        <button
            disabled={isLoading}
            onClick={() => guard(null, load)}
            className={`btn-text mx-auto ${className}`}
        >
            {isLoading ? <Spinner className='text-exs' /> : title}
        </button>
    )
}

export default Load;