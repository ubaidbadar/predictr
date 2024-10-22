import React from 'react';

export default function Menu({ children, value }) {
    if (children.length && value) return children.map((child, key) => (
        React.cloneElement(child, {
            key,
            className: child.props.value === value ? 'active' : ''
        })
    ))
    return children
}