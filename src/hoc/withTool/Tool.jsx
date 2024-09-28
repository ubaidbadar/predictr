import React from 'react';
import './Tool.scss';
import useQuery from '../../hooks/useQuery';
import useModel from '../../hooks/useModel';

const Tool = ({ children, ...props }) => {
    return (
        <>
            <Main {...props} />
            <div className='ToolPage'>
                {children}
            </div>
        </>
    )
}

const Main = ({ responsive = true, id }) => {
    const isMobile = useQuery(), [checked, setChecked] = React.useState(false), isActive = checked && isMobile;
    useModel({
        isActive,
        closeHandler: () => setChecked(false),
        shouldWork: isActive,
        changed: [isActive]
    });
    return (
        <>
            {responsive && <input checked={checked} type='checkbox' onChange={e => setChecked(e.target.checked)} id={id} className='ToolPage-Responsive-Check' />}
            {responsive && isActive && <label htmlFor={id} className='blur transition z-index-8'></label>}
            {!responsive && <div className='ToolPage-Responsive-Check' id={id} />}
        </>
    )
}

export default Tool;