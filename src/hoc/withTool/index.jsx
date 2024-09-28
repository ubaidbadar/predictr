import React, { useState, useEffect, useCallback, useContext } from 'react';
import ProductPageTitleBar from '../../components-v2/ProductPageTitleBar/ProductPageTitleBar';
import MinimizedContext from '../../contexts/MinimizedPagesContext';
import './styles.scss';
import { useSymbols } from '../../contexts/SymbolContext';

const op = {
    showTips: false
}

const withTool = (WrappedComponent, title, options = op) => {
    options = { ...op, ...options };
    const App = props => {
        const symbolsContext = useSymbols();
        const { location, goBack } = symbolsContext.history;
        const [stepNo, setStepNo] = useState(0);
        const { addPageToMinimize, removePageFromMinimize, pages } = useContext(MinimizedContext);
        const pathname = location.pathname + location.search;
        let state = useCallback(null, [])
        const getState = newState => state = newState;
        const currentPage = pages.find(page => page.title === title);
        const onMinimize = () => {
            addPageToMinimize({ title, pathname, state: { ...state }, algo: props.algo, hash: location.hash });
            goBack();
        };
        const onClose = () => {
            removePageFromMinimize(pathname);
            goBack();
        }
        useEffect(() => {
            return symbolsContext.onClear
        }, [])
        return (
            <>
                <ProductPageTitleBar goBack={goBack}
                    algo={props.algo}
                    title={title}
                    {...options}
                    onDemo={() => setStepNo(1)}
                    onMinimize={onMinimize}
                    onClose={onClose}
                />
                <WrappedComponent {...props}
                    {...symbolsContext}
                    getState={getState}
                    state={currentPage?.state}
                    isPage={location.pathname === '/algo_page'}
                    tipProps={{
                        stepNo,
                        onNext: () => setStepNo(stepNo + 1),
                        onSkip: () => setStepNo(0)
                    }}
                />
            </>
        )
    }

    return App;
}

export default withTool;