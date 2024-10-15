import useAuth from "../contexts/auth";


export default function useBoard() {
    const auth = useAuth(), gaurd = () => !auth.isLoggedIn && (location.hash = "#login");    
    return { ...auth, gaurd }
}