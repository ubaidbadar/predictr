import axios from "axios";

axios.defaults.baseURL = "/api"
// axios.defaults.baseURL = process.env.NODE_ENV === "development" ?  "http://localhost:5001" : 'https://stockalgos.com'
// axios.defaults.withCredentials = true;

export default axios