import React from 'react';
import useLoadMore from '../../../hooks/useLoadMore';
import Spinner from '../../../ui/spinner';

const LoadMore = ({ api, onLoad, title, className = '', checkLogin }) => {
    const { isLoading, loadMore } = useLoadMore(api, onLoad);
    return (
        <button
            disabled={isLoading}
            onClick={() => checkLogin() && loadMore()}
            className={`btn btn-text small ${className}`}
        >
            {title}
            {isLoading && <Spinner fontSize='0.25rem' />}
        </button>
    )
}

export default LoadMore;