import React from 'react';
import './buttons.css';

const ButtonTextRounded = ({children, className, ...props}) => {
    return (
        <div className={`button button_text button_rounded ${className}`} {...props}>
            {children}
        </div>
    );
};

export default ButtonTextRounded;