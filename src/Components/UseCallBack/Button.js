import React from 'react'

//chidren is innerText
function Button({ handleclick, children }) {
    console.log(`Rednering button -`, children)
    return (
        <button onClick={handleclick}>
            {children}
        </button>
    )
}

export default React.memo(Button)
