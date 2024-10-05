import React from 'react';
import styles from './styles.module.scss';

const ImageWrapper = ({ src, height = '50%', className = '', Root = 'span', children, draggable, ...props }) => {
    return (
        <Root className={`d-block position-relative ${className} ${styles.root}`} {...props}>
            <span className='d-block' style={{ paddingTop: height }} />
            {children}
            {src && <img src={src} alt={props.title || ""} draggable={draggable} />}
        </Root>
    )
}

export default ImageWrapper;