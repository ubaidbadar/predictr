import Modal from "../../ui/modal/modal";
import Form from "./form";
import F from '../../hoc/form'
import getSearchParams from "../../lib/getSearchParams";
import { useNavigate } from "react-router-dom";


export default function FiltersModal() {
    const navigate = useNavigate();
    return (
        <Modal title="Filter Predictions"
            Root={F}
            onSubmit={e => {
                e.onSuccess()
                const url = getSearchParams(e.values).toString()
                navigate(`?${url}`, { replace: true })
                e.other.close();
            }}
            component={tools => <button id="Predictions-Filter-Modal" onClick={tools.open} className="hidden"></button>}
        >
            <Form />
        </Modal>
    )
}