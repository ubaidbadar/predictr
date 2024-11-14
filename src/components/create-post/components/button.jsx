import CheckCircle from '../../../icons/check-circle';
import Down from '../../../icons/down';

const Button = ({ value, title, ...props }) => (
    <button
        {...props}
        type="button"
        aria-label={title}
        aria-details={value || "Select Stock"}
    >{value ? <CheckCircle /> : <Down />}</button>
)

export default Button;