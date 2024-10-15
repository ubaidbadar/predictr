import { useNavigate } from "react-router-dom";
import useAuth from "../contexts/auth";


export default function useBoard() {
    const navigate = useNavigate(), auth = useAuth(), gaurd = () => !auth.isLoggedIn && (location.hash = "#login");    
    return { ...auth, gaurd, navigate }
}