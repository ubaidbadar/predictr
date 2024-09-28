// import toastr from "toastr"

export default err => {
    const message = err?.response?.data?.message || err?.response?.data?.status || err?.response?.message || err.message || 'Something went wrong!';
    return message;
}