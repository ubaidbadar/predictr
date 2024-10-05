import React, { useEffect } from 'react';
import RefreshProvider from "./refresh/provider";
import { SymbolContextProvider } from './SymbolContext';
import AuthProvider from './auth/provider';
import { BrowserRouter } from 'react-router-dom';
import onResize from '../lib/onResize';

export default function GlobalContext(props) {

    const d = document.documentElement;
    if (process.env.NODE_ENV !== 'production') d.classList.add('development')

    useEffect(() => {
        const cb = () => {
            d.style.setProperty('--app-height', window.innerHeight + 'px');
            if ('ontouchstart' in d || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) d.classList.remove('desktop');
            else d.classList.add('desktop');
        }
        return onResize(cb);
    }, [])

    return (
        <BrowserRouter>
            <RefreshProvider>
                <AuthProvider>
                    <SymbolContextProvider>
                        {props.children}
                    </SymbolContextProvider>
                </AuthProvider>
            </RefreshProvider>
        </BrowserRouter>
    );
}