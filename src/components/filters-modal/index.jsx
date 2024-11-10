import Modal from "../../ui/modal/modal";
import Form from "./form";
import F from '../../hoc/Form'


export default function FiltersModal() {
    return (
        <Modal title="Filter Predictions" 
            Root={F}
            onSubmit={e => {
            }}
            component={tools => <button id="Predictions-Filter-Modal" onClick={tools.open} className="hidden"></button>}
        >
            <Form />
        </Modal>
    )
}