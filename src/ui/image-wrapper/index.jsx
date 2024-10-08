import React from 'react';
import styles from './styles.module.scss';

const ImageWrapper = ({ src, height = '50%', className = '', Root = 'span', children, draggable, ...props }) => {
    return (
        <Root style={{ "--height": height }} className={`${className} ${styles.root}`} {...props}>
            {children}
            {src && <img src={src} alt={props.title || ""} draggable={draggable} />}
        </Root>
    )
}

export default ImageWrapper;