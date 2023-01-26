import React from 'react';
import './buttons.css';

const ButtonIcon = ({
	children, className, color = 'black', onClick,
}) => (
	<button type="button" className={`button button_icon ${className}`} style={{ color, borderColor: color }} onClick={onClick}>
		{children}
	</button>
);

export default ButtonIcon;
