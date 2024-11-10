import Modal from "../../ui/modal/modal";
import Form from "./form";
import F from '../../hoc/form'
import updateSearchParams from "../../lib/updateSearchParams";


export default function FiltersModal() {
    return (
        <Modal title="Filter Predictions"
            Root={F}
            onSubmit={e => {
                updateSearchParams(e.values);
                e.other.close();
            }}
            component={tools => <button id="Predictions-Filter-Modal" onClick={tools.open} className="hidden"></button>}
        >
            <Form />
        </Modal>
    )
}