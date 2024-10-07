import useStockSearch from "../../hooks/useStockSearch";
import Search from "../../ui/search";
import ToggleText from "../../ui/toggle-text";
import AddStockModal from "../add-stock-modal";
import styles from './stock.module.scss';


function Main(props) {
    const { results, onAdd, ...sProps } = useStockSearch({ value: props.stock_symbol, api: "fetch_stock" });
    return (
        <div className={styles.main}>
            <Search placeholder="Search" className="mb-5" {...sProps} />
            {results.map(item => (
                <ToggleText
                    key={item._id}
                    value={item.ticker}
                    onChange={props.onSelect}
                    subtitle={item.ticker}
                    title={item.company_name}
                />
            ))}
            <p className='mb-0 text-accent-4 d-flex gap-1 align-items-center'>
                Don't see your stock, <AddStockModal defaultValue={sProps.value} onFinished={onAdd} />
            </p>
        </div>
    )
}

export default function Stock(props) {
    return (
        <>
            {props.getHeader('Select a stock')}
            <Main {...props}
                onSelect={e => {
                    props.setForm({stock_name: e.target.value});
                    props.back();
                }}
            />
        </>
    )
}