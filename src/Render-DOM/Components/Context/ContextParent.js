import React, { useState } from 'react'
import { ChildA } from '../Context/ContextChild'

ContextParent = () => {
    const [count, setCount] = useState(0)
    console.log('context parent render.')
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Click</button>
            <ChildA />
        </div>
    )
}

export default ContextParent
