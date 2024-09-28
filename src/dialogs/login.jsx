import Form from "../hoc/Form";
import Email from "../ui/email";
import Modal from "../ui/modal";
import Password from "../ui/password";
import axios from "../config/axios";

export default function Login(props) {
    return (
        <Modal title="Sign In">
            <Form className="grid gap-3"
                onSubmit={data => {
                    axios.post("/sign_in", data.values)
                        .then(res => props.setAuth(res.data))
                        .catch(data.onFailure)
                }}
                footer={props => (
                    <button className={`btn-primary loading ${props.className}`} disabled={props.disabled}>Login</button>
                )}
            >
                <Email required label="Email" name="username" />
                <Password required label="Password" name="password" />
            </Form>
        </Modal>
    )
}