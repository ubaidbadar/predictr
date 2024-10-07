import './styles.scss';

export default function Input({ label, className, end, inputClass, errorText, ...props }) {
    return (
        <fieldset className={`Input-Wrapper ${className}`}>
            <textarea placeholder=' ' className={inputClass} {...props} onBlur={e => e.target.classList.add("Input-Blur")} />
            {label && (
                <>
                    <label>{label}</label>
                    <legend>{label}</legend>
                </>
            )}
            {end}
            <small className="Error">{errorText}</small>
        </fieldset>
    )
}