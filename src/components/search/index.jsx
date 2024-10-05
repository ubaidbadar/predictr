import React, { useMemo, useEffect } from 'react';
import styles from './Search.module.scss';
import axios from 'axios';
import SearchItem from './SearchItem';
import SearchWrapper from './SearchWrapper';
import useStockSearch from '../../hooks/useStockSearch';


const Search = ({ updateHandler, isSearching, selectedItem, watchList, errorHandler, onSuccess, algos }) => {

    const { value, results, ...sProps } = useStockSearch()
    const tickers = useMemo(() => selectedItem?.stocks.map(item => item?.ticker) || [], [selectedItem?.stocks]);
    const onStockAdd = (item, onError) => {
        selectedItem.stocks.push(item);
        tickers.push(item.ticker)
        updateHandler({ watchList })
        axios.put('/add_to_watchlist', { stock_item_id: item._id, watch_list_id: selectedItem._id })
            .then(res => onSuccess())
            .catch(errorHandler)
    }
    const onRemove = id => {
        const newStocks = selectedItem.stocks.filter(item => item._id !== id);
        selectedItem.stocks = newStocks;
        updateHandler({ watchList });
        axios.delete(`/remove_from_watchlist?watch_list_id=${selectedItem._id}&&stock_item_id=${id}`)
            .then(() => onSuccess())
            .catch(errorHandler)
    }
    useEffect(() => {
        if (value === "" && isSearching) updateHandler({ isSearching: false });
        if (value !== "" && !isSearching) updateHandler({ isSearching: true });
    }, [value])
    return (
        <>
            <SearchWrapper {...sProps} value={value} />
            {value !== "" && (
                <div className={`position-absolute bg-light start-0 w-100 ${styles.results}`}>
                    {results.map(result => (
                        <SearchItem
                            algos={algos}
                            isIncludes={tickers.includes(result.ticker)}
                            onAdd={onError => onStockAdd(result, onError)}
                            {...result}
                            key={result._id}
                            onRemove={() => onRemove(result._id)}
                        />
                    ))}
                </div>
            )}
        </>
    )
}

export default Search;