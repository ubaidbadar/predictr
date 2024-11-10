import axios from "axios"
import React, { useState } from "react"
import CheckCircle from "../icons/check-circle";


const ActivateEmailResend = props => {
    const [{ isLoading, isSent }, setStatus] = useState({});
    const onClick = () => {
        setStatus({ isLoading: true });
        axios.post('/resend_registration_email', { email: props.email || props.username })
        setTimeout(() => {
            setStatus({ isSent: true })
        }, 3000)
    }
    return (
        <div className="inline-flex">
            {
                isLoading ? <span className="loading text-primary" /> :
                    isSent ? <p className="text-green-0 flex gap-2">Sent <CheckCircle width="1em" /></p>
                        : <button className="btn-text" onClick={onClick}>Send again</button>
            }
        </div>
    )
}


export default ActivateEmailResend;
