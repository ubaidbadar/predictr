import useAuth from "../contexts/auth";


export default function useBoard() {
    const auth = useAuth(), guard = () => !auth.isLoggedIn && (location.hash = "#login");    
    return { ...auth, guard }
}