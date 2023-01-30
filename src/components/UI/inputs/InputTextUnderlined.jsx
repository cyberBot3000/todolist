import React from 'react';

const InputTextUnderLined = React.forwardRef(
	({ className, outlineColor, placeholder, onInput }, ref) => (
		<input
			ref={ref}
			className={`input input_underlined ${className}`}
			style={{ borderColor: outlineColor }}
			type='text'
			placeholder={placeholder}
			onInput={onInput}
		/>
	)
);

export default InputTextUnderLined;
