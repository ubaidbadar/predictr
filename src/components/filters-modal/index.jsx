import useShow from "../../hooks/useShow";
import Calendar from "../../icons/calendar";
import Modal from "../../ui/modal";
import RangePicker from "../../ui/range-picker";
import TextField from "../../ui/textfield";

export default function FiltersModal() {
    const tools = useShow("active");
    return (
        <Modal {...tools} title="Filter Predictions">
            <TextField placeholder="Enter manually accuracy" title="Accuracy (%)" />
            <RangePicker
                component={tools => (
                    <>
                    </>
                )}
            />
        </Modal>
    )
}