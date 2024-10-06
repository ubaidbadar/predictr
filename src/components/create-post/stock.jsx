import useStockSearch from "../../hooks/useStockSearch";
import ModalHeader from "../../ui/modal/header";
import Search from "../../ui/search";
import SearchWrapper from "../search/wrapper";


function Main(props) {
    const { results, onAdd, ...sProps } = useStockSearch({ value: props.stock_symbol, api: "fetch_stock" });
    return (
        <div>
            <Search placeholder="Search" {...sProps} />
        </div>
    )
}

export default function Stock(props) {
    return (
        <>
            <ModalHeader
                title={<>{props.title} / <span>Select a stock</span></>}
                close={props.back}
            />
            <Main {...props} />
        </>
    )
}