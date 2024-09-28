import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AddIcon from '../../icons-v2/AddIcon';
import NormalModel from './NormalModel';
import './Model.scss';

const ModelWrapper = ({ title, actions, children, ...props }) => {
    return (
        <NormalModel {...props}>
            <div className='d-flex position-sticky align-items-center justify-content-between'>
                <b className='fw-semibold'>{title}</b>
                <span className="btn btn-icon no-padding mb-0" onClick={props.hidePopUp}> <AddIcon className='rotate-45' /> </span>
            </div>
            <div className='flex-1 d-flex flex-column gap-inherit'>{children}</div>
            {actions && actions() && (
                <div className='model-footer'>
                    {actions(props.hidePopUp)}
                </div>
            )}
        </NormalModel>
    )
}

const defaultFunc = () => { }

const Model = ({ show = false, component = defaultFunc, closeHandler = defaultFunc, className = '', ...props }) => {
    const [isPopUp, setIsPopUp] = useState(show);
    const showPopUp = () => setIsPopUp(true);
    const hidePopUp = () => {
        setIsPopUp('closing');
        setTimeout(() => {
            setIsPopUp(false);
            closeHandler()
        }, 200);
    }
    props.showPopUp = showPopUp;
    props.hidePopUp = hidePopUp;
    props.isPopUp = isPopUp;
    props.className = `${className} animation-${isPopUp === 'closing' ? 'opacity-down' : 'scale'}`
    return (
        <>
            {component({ showPopUp, hidePopUp })}
            {(isPopUp || show) && ReactDOM.createPortal(props.isSimpleModel ? <NormalModel {...props} /> : <ModelWrapper {...props} />, document.getElementById('popup-wrapper'))}
        </>
    )
}

export default Model;
