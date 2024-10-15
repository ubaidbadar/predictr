import React, { useState, useEffect } from "react";
import Spinner from "../../ui/spinner";
import axios from "../../config/axios";
import RefreshContext from "./context";

const search = window.location.search, isSearch = /scope|code/.test(search);

export default function RefreshContextProvider({ children }) {
    const [loading, setLoading] = useState(isSearch);
    const onRefresh = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500)
    }
    useEffect(() => {
        if (isSearch) {
            const stripe_acct = new URLSearchParams(search).get('code');
            if(stripe_acct) {
                axios.post('/update_stripe_seller_acct', { stripe_acct })
                    .then(onRefresh)
                    .catch(onRefresh)
            }
            else setLoading(false)
        }
    }, []);
    return loading ? <Spinner toMiddle /> : (
        <RefreshContext.Provider value={{ onRefresh }}>
            {children}
        </RefreshContext.Provider>
    )
}