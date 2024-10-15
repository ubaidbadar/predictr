import Modal from "../ui/modal/modal";

export default function LogoutModal(props) {
    return (
        <Modal design={1}
            title="Are you sure"
            component={tools => <button onClick={tools.open} type="button" id="Logout-Modal" className="d-none" />}
        >
            You can come back any time, all your tools and algos are running on the cloud, have fun!
            <div className="Modal-Footer">
                <label htmlFor="Are you sure">Cancel</label>
                <button className="text-red-0">Logout</button>
            </div>
        </Modal>
    )
}