import Form from "../hoc/form";
import Email from "../ui/email";
import Modal from "../ui/modal";
import Password from "../ui/password";
import axios from "../config/axios";
import { useNavigate } from "react-router-dom";
import AuthFooter from "../components/auth-footer";

export default function Login(props) {
    const navigate = useNavigate();
    return (
        <Modal title="Sign In" className="Modal-Medium" close={() => navigate(-1)}>
            <Form className="grid gap-5"
                onSubmit={data => {
                    axios.post("/sign_in", data.values)
                        .then(res => props.setAuth(res.data))
                        .catch(data.onFailure)
                }}
                footer={props => (
                    <div className="flex-between">
                        <a className="btn-text" href="#forgot-password">Forgot Password?</a>
                        <button className={`btn-primary ${props.className}`} disabled={props.disabled}>Login</button>
                    </div>
                )}
            >
                <div className="-mt-3">
                    or <a href="#register" className="btn-text text-sm">Create an account</a>
                </div>
                <Email required label="Email" errorText="Email is not valid!" name="username" />
                <Password required label="Password" errorText="Please must be minimum 6 characters long!" name="password" />
            </Form>
            <AuthFooter />
        </Modal>
    )
}