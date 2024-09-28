import Input from "./input";
import Eye from '../icons/eye';
import { useState } from "react";

export default function Password(props) {
    const [isPassword, setPassword] = useState(true);
    return (
        <Input minLength={8} {...props} type={isPassword ? "password" : "text"} end={<button onClick={() => setPassword(!isPassword)} className="btn-icon mx-1" type="button"><Eye /></button>} />
    )
}