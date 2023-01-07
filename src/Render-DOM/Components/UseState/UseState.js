import React, { useState } from 'react'

const UseState = () => {
    const [count, setcount] = useState(0)
    console.log('Rendering..')
    return (
        <div>
            <button onClick={()=>setcount((c)=>c+1)}>Click {count}</button>
            <button onClick={()=>setcount(0)}>Click to 0</button>
            <button onClick={()=>setcount(5)}>Click to 5</button>
        </div>
    )
}

export default UseState
