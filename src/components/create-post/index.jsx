import useShow from "../../hooks/useShow";
import Modal from "../../ui/modal_base";
import Avatar from "../avatar";
import Create from "./create";

export default function CreatePost(props) {
    const tools = useShow();
    return (
        <>
            <div className="card-v3 gap-2 flex-center">
                <Avatar {...props.user} className="h3" />
                <button
                    onClick={tools.open}
                    id="Create-Post-Modal"
                    className="bg-light-1 rounded-2 flex-center text-gray-0 px-4 py-2 flex-1"
                >
                    Make a prediction, Trevor
                </button>
            </div>
            {tools.state && (
                <Modal {...tools}>
                    <Create {...props} close={tools.close} />
                </Modal>
            )}
        </>
    )
}