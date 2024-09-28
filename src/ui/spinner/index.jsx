import React from 'react';
import styles from './styles.module.scss';

const Spinner = ({ className = "" }) => (
    <div className={`${styles.root} text-green-0 ${className}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default Spinner;