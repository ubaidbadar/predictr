import useAuth from "../contexts/auth";
import useQuery from "./useQuery";


export default function useBoard() {
    const auth = useAuth(), isMobile = useQuery(), guard = (_, cb) => {
        if(!auth.isLoggedIn) return location.hash = "#login"
        // !auth.isLoggedIn && (location.hash = "#login")
        cb && cb()
    }    
    return { ...auth, guard, isMobile }
}