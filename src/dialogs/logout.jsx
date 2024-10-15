import Modal from "../ui/modal/modal";
import axios from "../config/axios";

export default function LogoutModal(props) {
    return (
        <Modal
            design={1}
            title="Are you sure"
            component={tools => <button type="button" className="hidden" onClick={tools.open} id="Logout-Modal" />}
            footer={close => (
                <>
                    <button onClick={close}>Cancel</button>
                    <button className="text-red-0"
                        onClick={() => {
                            axios.get("/log_out");
                            setTimeout(() => {
                                close();
                                props.logout();
                            }, 300)
                        }}
                    >Logout</button>
                </>
            )}
        >
            You can come back any time, all your tools and algos are running on the cloud, have fun!

        </Modal>
    )
}