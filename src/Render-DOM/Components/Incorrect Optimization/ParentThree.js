import React, { useState } from 'react'
import { MemoizedChildFour } from './ChildFour'
import { MemoizedChildThree } from './ChildThree'

//children from props
const ParentThree = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('veerababu')

    console.log('ParentThree render')
    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>count -{count}</button>
            <button onClick={() => setName('rallabandi')}>ChangeName</button>
            <MemoizedChildFour name={name} />
            {/* <MemoizedChildThree name={name}>
                <strong>Hello</strong>
            </MemoizedChildThree> */}
        </div>
    )
}

export default ParentThree
