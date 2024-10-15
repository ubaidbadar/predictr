import React from 'react';
import useLoadMore from '../../../hooks/useLoadMore';
import Spinner from '../../../ui/spinner';

const LoadMore = ({ api, onLoad, title, className = '', gaurd }) => {
    const { isLoading, loadMore } = useLoadMore(api, onLoad);
    return (
        <button
            disabled={isLoading}
            onClick={() => gaurd() && loadMore()}
            className={`btn btn-text small ${className}`}
        >
            {title}
            {isLoading && <Spinner className='text-exs' />}
        </button>
    )
}

export default LoadMore;