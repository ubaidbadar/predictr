const cb = (message, className) => {
    const elm = document.createElement('div');
    elm.className = className;
    elm.innerHTML = message;
    document.getElementById('toastr').appendChild(elm);
    setTimeout(() => {
        elm.remove();
    }, 3000)
}

const toastr = {
    success: message => cb(message, "primary"),
    warn: message => cb(message, "warn"),
    error: message => cb(message, "danger")
}

export default toastr;