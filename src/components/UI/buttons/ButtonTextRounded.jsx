import React from 'react';
import './buttons.css';

const ButtonTextRounded = ({children, className, ...props}) => {
    return (
        <button className={`button button_text button_rounded ${className}`} {...props}>
            {children}
        </button>
    );
};

export default ButtonTextRounded;