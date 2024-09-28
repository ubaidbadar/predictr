import Form from "../hoc/Form";
import Email from "../ui/email";
import Modal from "../ui/modal";
import Password from "../ui/password";
import axios from "../config/axios";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
    const navigate = useNavigate();
    return (
        <Modal title="Sign In" close={() => navigate(-1)}>
            <Form className="grid gap-3"
                onSubmit={data => {
                    axios.post("/sign_in", data.values)
                        .then(res => props.setAuth(res.data))
                        .catch(data.onFailure)
                }}
                footer={props => (
                    <button className={`btn-primary ${props.className}`} disabled={props.disabled}>Login</button>
                )}
            >
                <Email required label="Email" errorText="Email is not valid!" name="username" />
                <Password required label="Password" errorText="Please must be minimum 6 characters long!" name="password" />
            </Form>
        </Modal>
    )
}