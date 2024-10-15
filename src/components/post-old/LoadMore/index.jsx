import React from 'react';
import useLoad from '../../../hooks/useLoad';
import Spinner from '../../../ui/spinner';

const LoadMore = ({ api, onLoad, title, className = '', guard }) => {
    const { isLoading, load } = useLoad(api, onLoad);
    return (
        <button
            disabled={isLoading}
            onClick={() => guard(load)}
            className={`btn btn-text small ${className}`}
        >
            {title}
            {isLoading && <Spinner className='text-exs' />}
        </button>
    )
}

export default LoadMore;