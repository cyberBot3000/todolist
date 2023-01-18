import React from 'react';

const InputTextUnderLined = React.forwardRef(({className, outlineColor, ...props}, ref) => {
    return (
        <input type="text" className={`input input_underlined ${className}`} ref={ref} style={{borderColor: outlineColor}} {...props}/>
    )
})

export default InputTextUnderLined;