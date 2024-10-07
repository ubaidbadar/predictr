import BoxField from "../../ui/boxfield";
import ModalHeader from "../../ui/modal/header";

export default function Movement(props) {
    return (
        <>
            <ModalHeader title="Movement" close={props.back} />   
            <div>
                <BoxField title="Up" />
            </div>
        </>
    )
}