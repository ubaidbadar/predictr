import React from "react";
import { useSymbols } from '../../contexts/SymbolContext';

export default function withProps(Component) {
    return function WrappedComponent(props) {
        const symbolsContext = useSymbols();
        const { location, goBack } = symbolsContext.history;
    }
}