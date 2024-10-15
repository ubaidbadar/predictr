import useAuth from "../contexts/auth";


export default function useBoard() {
    const auth = useAuth(), guard = (_, cb) => {
        if(!auth.isLoggedIn) return location.hash = "#login"
        // !auth.isLoggedIn && (location.hash = "#login")
        cb && cb()
    }    
    return { ...auth, guard }
}