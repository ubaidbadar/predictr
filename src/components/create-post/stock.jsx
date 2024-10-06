import useStockSearch from "../../hooks/useStockSearch";
import ModalHeader from "../../ui/modal/header";


function Main(props) {
    const { results, onAdd, ...sProps } = useStockSearch({ value: props.stock_symbol, api: "fetch_stock" });
    return (
        <>

        </>
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