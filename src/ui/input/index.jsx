import './styles.scss';

export default function Input({ label, className, end, inputClass, ...props }) {
    return (
        <fieldset className={`Input-Wrapper ${className}`}>
            <input placeholder=' ' className={inputClass} {...props} onBlur={e => e.target.classList.add("Input-Blur")} />
            {label && (
                <>
                    <label>{label}</label>
                    <legend>{label}</legend>
                </>
            )}
            {end}
        </fieldset>
    )
}