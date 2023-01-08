import React from 'react'

//step 3 receiving input ref from parent component and attached to native input tag.
//Now Parent component directly access input element by using this.inputref.current
const FRInput = React.forwardRef((props,ref) => {
    return (
        <div>
            <input type='text' ref={ref}/>
        </div>
    )
})
export default FRInput


