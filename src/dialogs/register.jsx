import Form from "../hoc/form";
import Email from "../ui/email";
import Modal from "../ui/modal";
import Password from "../ui/password";
import axios from "../config/axios";
import { useNavigate } from "react-router-dom";
import AuthFooter from "../components/auth-footer";
import Input from "../ui/input";
import BoxField from "../ui/boxfield";

export default function Register(props) {
    const navigate = useNavigate();
    return (
        <Modal title="Sign Up" className="Modal-Medium" close={() => navigate(-1)}>
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
                    or <a href="#register" className="btn-text text-sm">sign in</a>
                </div>
                <Input
                    name='name'
                    label='Display Name'
                    required={true}
                    errorText="Name should be minimum 3 characters long!"
                    className='flex-1'
                    minLength={3}
                />
                <Email required label="Email" errorText="Email is not valid!" name="email" />
                <Password required label="Password" errorText="Please must be minimum 6 characters long!" name="password" />
                <Password required label="Confirm Password" errorText="Confirm Please must be minimum 6 characters long!" name="confirmPassword" />
                <BoxField required className="text-gray-0" label={<>I agree to <a className="btn-text">Privacy Policy</a> and <a href="" className="btn-text">Terms of service</a></>} />
            </Form>
            <AuthFooter />
        </Modal>
    )
}