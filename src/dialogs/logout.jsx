import Modal from "../ui/modal/modal";

export default function LogoutModal(props) {
    return (
        <Modal design={1}
            id="Logout-Close"
            title="Are you sure"
            component={tools => <button onClick={tools.open} type="button" id="Logout-Modal" className="d-none" />}
            footer={close => (
                <>
                    <button onClick={close}>Cancel</button>
                    <button className="text-red-0">Logout</button>
                </>
            )}
        >
            You can come back any time, all your tools and algos are running on the cloud, have fun!
        </Modal>
    )
}