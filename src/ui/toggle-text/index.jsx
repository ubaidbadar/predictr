import React from 'react';
import styles from './styles.module.scss';

const ToggleText = ({ title, type = 'radio', value, className = '', ...props }) => (
    <label className={`${className} text-nowrap ${styles.root}`}>
        <input
            type={type} {...props}
            className='d-none'
            value={value || title}
        />
        <span>{title}</span>
    </label>
)

export default ToggleText;