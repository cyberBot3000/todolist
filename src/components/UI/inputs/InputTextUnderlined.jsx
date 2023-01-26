import React from 'react';

const InputTextUnderLined = React.forwardRef(({ className, outlineColor, placeholder }, ref) => (
	<input
		ref={ref}
		className={`input input_underlined ${className}`}
		style={{ borderColor: outlineColor }}
		type="text"
		placeholder={placeholder}
	/>
));

export default InputTextUnderLined;
