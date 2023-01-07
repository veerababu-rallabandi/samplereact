import React, { useEffect, useRef } from 'react'

function FocusInput() {

    const inputref = useRef(null)
    useEffect(() => {
        //focus the text box when page is load
        inputref.current.focus()
    }, [])
    return (
        <div>
            <input ref={inputref} type='text' />
        </div>
    )
}

export default FocusInput
