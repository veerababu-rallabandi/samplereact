import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [count, setCount] = useState(0)

    console.log('parent render')
    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>count -{count}</button>
            <button onClick={() => setCount(0)}>Count to 0</button>
            <button onClick={() => setCount(5)}>Count to 5</button>
            <Child />
        </div>
    )
}

export default Parent
