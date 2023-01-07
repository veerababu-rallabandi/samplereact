import React, { useState } from 'react'

//children from props
const ParentOne = ({Children}) => {
    const [count, setCount] = useState(0)

    console.log('parentOne render')
    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>count -{count}</button>
            {Children}
        </div>
    )
}

export default ParentOne
