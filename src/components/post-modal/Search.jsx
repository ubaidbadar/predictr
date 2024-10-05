import React, { useMemo } from 'react';
import useStockSearch from '../../../hooks/useStockSearch';
import Model from '../../../ui-v2/Modal/Model';
import ToggleText from '../../../ui-v2/ToggleText/ToggleText';
import SearchWrapper from '../../WatchList/SearchWrapper';
import styles from './Search.module.scss';
import AddStockModal from '../../AddStockModal/AddStockModal';


const Main = props => {
    const { results, onAdd, ...sProps } = useStockSearch({ value: props.value, api: "fetch_stock" });
    return (
        <div className={styles.main}>
            <SearchWrapper {...sProps} className='mb-2' isRounded={true} />
            {useMemo(() => (
                results.map(item => (
                    <ToggleText
                        key={item._id}
                        name={item.company_name}
                        value={item.ticker}
                        onChange={props.onSelect}
                        title={<span ticker={item.ticker}>{item.company_name}</span>}
                    />
                ))
            ), [results])}
            <p className='mb-0 text-accent-4 d-flex gap-1 align-items-center'>
                Don't see your stock, <AddStockModal defaultValue={sProps.value} onFinished={onAdd} />
            </p>
        </div>
    )
}

const Search = props => (
    <Model
        className={`no-animation ${styles.root}`}
        show={true}
        closeHandler={props.back}
        title={props.getTitle('Select a stock')}
    >
        <Main
            value={props.form.stock_symbol}
            onSelect={
                e => props.setStatus({
                    form: {
                        ...props.form,
                        stock_symbol: e.target.value,
                        stock_name: e.target.name
                    },
                    no_animation: true
                })
            }
        />
    </Model>
)

export default Search;
