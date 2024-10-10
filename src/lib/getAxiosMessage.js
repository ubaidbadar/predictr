import toastr from "../config/toastr";

export default err => {
    const message = err?.response?.data?.message || err?.response?.data?.status || err?.response?.message || err.message || 'Something went wrong!';
    toastr.error(message);
    return message;
}