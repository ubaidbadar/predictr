import { useLocation } from "react-router-dom"
import Login from "./login";

export default function Auth(props) {
    const hash = useLocation().hash;
    if(hash === "#login") return <Login {...props} />
    return ""
    // if(hash === "#register") return <Register />
}