export default function getValues(form) {
    const formData = new FormData(form), values = {};
    for (let key of formData.keys()) {
        const elm = form[key]
        if (elm.type === 'file') values[key] = elm.files;
        else if (!elm.type && typeof elm.value === "string") {
            const child = elm[0];
            values[key] = child && child.type === 'radio' ? formData.get(key) : formData.getAll(key);
        }
        else values[key] = elm.value;
    }
    return { values, formData };
}