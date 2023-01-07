import React, { useState } from 'react'
import { MemoizedChildTwo } from './ChildTwo'

//children from props
const ParentTwo = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    console.log('parentTwo render')
    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>count -{count}</button>
            <button onClick={() => setName('veerababu')}>ChangeName</button>
            <MemoizedChildTwo name={name} />
        </div>
    )
}

export default ParentTwo
