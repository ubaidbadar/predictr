import { Fragment, useEffect, useState } from "react"
import AuthContext from "./context"
import axios from "../../config/axios";
import user from './state';
import Spinner from '../../ui/spinner';
import Header from "../../components/header";
import Pickers from "../pickers";
import Global from "../../dialogs/global";
import LogoutModal from "../../dialogs/logout";
import io from 'socket.io-client';

const socket = io.connect();

export default function AuthProvider({ children }) {
    const [state, setState] = useState(user), setAuth = auth => setState({ ...state, ...auth });
    useEffect(() => {
        const cb = async () => {
            try {
                const user = (await axios.get('/fetch_user_details')).data
                if (user._id) {
                    const { premium, ...stats } = (await axios.get(`/fetch_user_stats/${user._id}`)).data
                    setState({ ...user, premium, ...stats, loading: false });
                }
                else setState({ ...state, loading: false })
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
        socket,
    }
    const Root = value.isLoggedIn ? Fragment : Pickers
    return (
        <Root>
            <Global {...value} />
            {value.isLoggedIn ? (
                <>
                    <LogoutModal logout={() => setAuth({ ...user, loading: false })} />
                </>
            ) : (
                <></>
            )}
            <AuthContext.Provider value={value}>
                <Header {...value} />
                {children}
            </AuthContext.Provider>
        </Root>
    )
}