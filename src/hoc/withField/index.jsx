import './styles.scss';

const withField = Component => ({ label, className, end, inputClass, errorText, ...props }) => (
    <fieldset className={`Input-Wrapper ${className}`}>
        <Component placeholder=' ' className={`${inputClass} Field`} {...props} onBlur={e => e.target.classList.add("Input-Blur")} />
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


export default withField;