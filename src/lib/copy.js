import toastr from '../config/toastr';

export default function copy(content, message) {
    return navigator.clipboard.writeText(content)
        .then(() => toastr.success(message))
}