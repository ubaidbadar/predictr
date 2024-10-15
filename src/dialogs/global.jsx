import { useLocation, useNavigate } from "react-router-dom"
import Login from "./login";
import Logout from "./logout";
import Register from './register';
import SetUpSubscription from "./subscription";

export default function GlobalModal(props) {
    const hash = useLocation().hash, navigaite = useNavigate(), close = () => navigaite("#", { replace: true }), p = { ...props, close };
    if (p.isLoggedIn) {
        switch (hash) {
            case "#logout": return <Logout {...p} />
            case "#subscription": return <SetUpSubscription {...p} />
            default: return ""
        }
    }
    switch (hash) {
        case "#login": return <Login {...p} />
        case "#register": return <Register {...p} />
        default: return ""
    }
}