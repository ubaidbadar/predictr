import { useEffect, useMemo, useRef, useState } from "react"
import styles from './styles.module.scss';
import getAxiosMessage from "../../lib/getAxiosMessage";
import getValues from "./getValues";

const Form = ({ footer, onSubmit, children, other, ...props }) => {
    const [{ err, loading, isValid, message }, setState] = useState({ isValid: false });
    let timer = useMemo(() => setTimeout(() => { }, 200), []);
    const formRef = useRef();
    
    const checkValid = () => {
        if (loading) return;
        clearTimeout(timer);
        timer = setTimeout(() => {
            const form = formRef.current;
            if (form) {
                let valid = form.checkValidity();
                if (!valid) return setState({ isValid: false });
                valid = ![...form.elements].find(el => el.className.includes("invalid"));
                setState({ isValid: valid });
            }
        }, 200);
    };


    useEffect(() => {
        checkValid();
    }, [])

    const onFormSubmit = e => {
        e.preventDefault();
        const form = formRef.current;
        if (loading || !isValid || !form.checkValidity()) return;
        const data = getValues(form);
        setState({ loading: true });
        if (onSubmit) {
            const p = {
                form,
                ...data,
                onSuccess: message => setState({ message }),
                onFailure: err => setState({ err: typeof err === 'string' ? err : getAxiosMessage(err) }),
            };
            onSubmit(p)
        }
    }

    return (
        <form {...props}
            ref={formRef}
            onChange={checkValid}
            onSubmit={onFormSubmit}
        >
            {useMemo(() => children, [])}
            {err && <small className='text-accent-2 text-start'>{err}</small>}
            {message && (
                <small className={`text-accent-3 d-block p-3 ${styles.success}`}>
                    <span>{message}</span>
                </small>
            )}
            {footer && footer({ disabled: !isValid || loading, className: loading ? "loading" : "" })}
        </form>
    )
}

export default Form;