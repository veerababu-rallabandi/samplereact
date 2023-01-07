import React, { useState, useMemo,useCallback } from 'react'
import { MemoizedChildFive } from './ChildFive'

//children from props
const ParentFour = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('R.')

    console.log('ParentFour render')

    const person = {
        fname: 'veera',
        lname: 'babu R'
    }

    const memoizedperson = useMemo(() => person, [])

    const handleclick = () => { }

    const memoizedhandleclick=useCallback(handleclick,[])
    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>count -{count}</button>
            <button onClick={() => setName('rallabandi')}>ChangeName</button>
            {/* <MemoizedChildFive name={name} person={memoizedperson} /> */}
            <MemoizedChildFive name={name} handleclick={memoizedhandleclick} />
        </div>
    )
}

export default ParentFour
