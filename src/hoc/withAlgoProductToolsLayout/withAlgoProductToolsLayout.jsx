import React, { useState, useEffect, useCallback, useContext } from 'react';
import ProductPageTitleBar from '../../components-v2/ProductPageTitleBar/ProductPageTitleBar';
import MinimizedContext from '../../contexts/MinimizedPagesContext';
import './styles.scss';
import { useSymbols } from '../../contexts/SymbolContext';

const op = {
    showTips: false,
    isResponsive: true
}

const withAlgoProductToolsLayout = (WrappedComponent, title, options = op) => {
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

        const [isResponsive, setIsResponsive] = useState(options.isResponsive);
        const setResponsive = isR => {
            if (isR && !isResponsive) setIsResponsive(true);
            if (!isR && isResponsive) setIsResponsive(false);
        }


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
        const showProductPageTitleBar = location.pathname.includes('algo_page');
        return (
            <>
                <input type='checkbox' id={title} className={`d-none ${isResponsive ? title : ""}`} />
                <div className={`${showProductPageTitleBar ? "" : "vh-page-header"} bg-surface-1 border-radius-inherit d-flex flex-column algo-tool-wrapper`}>
                    <label className='position-fixed top-0 w-100 h-100 bg-normal z-index-6 opacity-6 tool-filter-item' htmlFor={title} />
                    {showProductPageTitleBar && (
                        <ProductPageTitleBar goBack={goBack}
                            algo={props.algo}
                            title={title}
                            {...options}
                            onDemo={() => setStepNo(1)}
                            onMinimize={onMinimize}
                            onClose={onClose}
                        />
                    )}
                    {!showProductPageTitleBar && (
                        <h6 className='m-0 text-normal text-capitalize p-3 pb-0 p-xl-5'>{title}</h6>
                    )
                    }
                    <div className='d-lg-grid d-flex flex-column flex-1 algo-tool-wrapper-main position-relative overflow-auto'>
                        <WrappedComponent {...props}
                            {...symbolsContext}
                            getState={getState}
                            state={currentPage?.state}
                            setResponsive={setResponsive}
                            isResponsive={isResponsive}
                            tipProps={{
                                stepNo,
                                onNext: () => setStepNo(stepNo + 1),
                                onSkip: () => setStepNo(0)
                            }}
                        />
                    </div>
                </div>
            </>
        )
    }

    return App;
}

export default withAlgoProductToolsLayout;