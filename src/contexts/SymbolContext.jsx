import React, { useState, createContext } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


const SymbolContextContext = createContext(({
    symbols: '',
    symbolsHandler: (symbols = [], pathname = '') => { },
    onClear: () => { }
}));


export const SymbolContextProvider = ({ children }) => {
    const [symbols, setSymbols] = useState('');
    const navigate = useNavigate();
    const symbolsHandler = (symbols, algo) => {
        setSymbols(symbols.map(item => item.ticker).join(','));
        navigate(`/algo_page?algo=${algo.url_link}&algo_id=${algo._id}`)
    }
    return (
        <SymbolContextContext.Provider value={{
            symbols,
            symbolsHandler,
            onClear: () => setSymbols(''),
            navigate,
        }}>
            {children}
        </SymbolContextContext.Provider>
    )
}

export const useSymbols = () => useContext(SymbolContextContext);