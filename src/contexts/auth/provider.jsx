import { useEffect, useState } from "react"
import AuthContext from "./context"
import axios from "../../config/axios";
import user from './state';
import Spinner from '../../ui/spinner';
import Header from "../../components/header";
import Auth from "../../dialogs/auth";

export default function AuthProvider({ children }) {
    const [state, setState] = useState(user), setAuth = auth => setState({ ...state, ...auth });
    useEffect(() => {
        const cb = async () => {
            try {
                const user  = (await axios.get('/fetch_user_details')).data
                if(user._id) user.stats = (await axios.get(`/fetch_user_stats/${user._id}`)).data
                setState({ ...user, loading: false })
            }
            catch (err) {
                console.log(err)
            }
        }
        cb()
    }, [])
    if (state.loading) return <Spinner className="fixed-middle" />
    const value = {
        user: state,
        setAuth,
        isLoggedIn: state._id ? true : false,
        loading: state.loading,
    }
    return (
        <>
            {!value.isLoggedIn && <Auth setAuth={setAuth} />}
            <AuthContext.Provider value={value}>
                <Header {...value} />
                {children}
            </AuthContext.Provider>
        </>
    )
}