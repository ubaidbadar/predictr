export default function CheckDefault({ className, type = "checkbox", title, label, ...props }) {
    return (
        <label className={className} title={title}>
            <input type={type} {...props} />
            {label}
        </label>
    )
}