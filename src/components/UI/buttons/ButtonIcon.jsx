import React from 'react';
import './buttons.css';

const ButtonIcon = ({children, className, color='black', ...props}) => {
    return (
        <button className={`button button_icon ${className}`} style={{color: color, borderColor: color}} {...props}>
            {children}
        </button>
    );
};

export default ButtonIcon;