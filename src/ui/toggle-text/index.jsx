import React from 'react';
import styles from './styles.module.scss';

const ToggleText = ({ title, type = 'radio', about, value, className = '', ...props }) => (
    <label about={about} className={`${className} ${styles.root}`}>
        <input
            {...props}
            type={type} 
            className='hidden'
            value={value || title}
        />
        {title}
    </label>
)

export default ToggleText;