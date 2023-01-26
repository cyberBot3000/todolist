import React from 'react';
import './inputs.css';

const InputTextLight = React.forwardRef(({ className, name, id }, ref) => (
	<input
		ref={ref}
		className={`input input_text input_light ${className}`}
		id={id}
		name={name}
		type='text'
	/>
));

export default InputTextLight;
