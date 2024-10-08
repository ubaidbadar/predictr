import useShow from "../../hooks/useShow";
import Modal from "../../ui/modal_base";
import Avatar from "../avatar";
import Create from "./create";

export default function CreatePost(props) {
    const tools = useShow();
    return (
        <>
            <button onClick={tools.open} className="card-v3 gap-2 flex">
                <Avatar {...props.user} className="h3" />
                <span className="bg-light-1 rounded-2 h-full flex-center text-gray-0 px-4 flex-1">Make a prediction, Trevor</span>
            </button>
            {tools.className && (
                <Modal className={`Modal-0 ${tools.className}`}>
                    <Create {...props} close={tools.close} />
                </Modal>
            )}
        </>
    )
}