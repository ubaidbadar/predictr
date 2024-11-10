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
                    <div className="flex-col gap-3">
                        <TextField
                            title="Date Range" 
                            onFocus={tools.open} 
                            readOnly right={<Calendar />} 
                            placeholder="From"
                            value={tools.values[0]}
                         />
                        <TextField value={tools.values[1]} onFocus={tools.open} readOnly right={<Calendar />} placeholder="To" />
                    </div>
                )}
            />
        </Modal>
    )
}