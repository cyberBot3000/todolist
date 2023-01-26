import React from 'react';
import './buttons.css';

const ButtonTextRounded = ({ children, className, onClick }) => (
	<button type="button" className={`button button_text button_rounded ${className}`} onClick={onClick}>
		{children}
	</button>
);

export default ButtonTextRounded;
