import React from 'react';
import useModel from '../../hooks/useModel';

const NormalModel = ({ isNormal, Root = "div", isLarge ,className, showPopUp, hidePopUp, children, isPopUp, isSimpleModel = false, isSmall = false, title, ...props }) => {
    const closeHandler = Root === 'form' ? null : hidePopUp;
    useModel({ shouldWork: isPopUp === true, changed: [isPopUp], closeHandler });
    if (typeof Root !== 'string') {
        props.hidePopUp = hidePopUp;
        props.showPopUp = showPopUp;
    }
    return (
        <div className={`Modal-Wrapper${isLarge ? " Modal-Large" : ''}${isSmall ? " Modal-Small" : ''}${isNormal ? " Modal-Normal" : ''}`}>
            <button type='button' id={title} className="Modal-Close" onClick={closeHandler} />
            <Root
                {...props}
                className={`Modal-Main ${className}${isSimpleModel ? '' : ' p-resp'} ${isSmall ? " Modal-Small" : ''}`}
            >{children}</Root>
        </div>
    )
}

export default NormalModel;