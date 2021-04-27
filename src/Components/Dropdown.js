
import React from 'react';
import './Dropdown.css';

const STYLES = [
    'btnPrimary',
    'btnOutline'
]

const SIZES = [
    'btnMedium',
    'btnLarge'
]

export const Dropdown = ({

    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}> {children} </button>
    )
}

export default Dropdown