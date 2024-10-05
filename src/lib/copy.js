// import toastr from "toastr"

export default function copy(content) {
    return navigator.clipboard.writeText(content)
        // .then(() => toastr.success(message))
}