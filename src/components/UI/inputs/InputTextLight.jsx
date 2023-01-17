import React from 'react';
import './inputs.css';

const InputTextLight = React.forwardRef(({className, name, id,  ...props}, ref) => {
    return (
        <input type="text" className={`input input_text input_light ${className}`} name={name} id={id} ref={ref} {...props}/>
    );
})

export default InputTextLight;