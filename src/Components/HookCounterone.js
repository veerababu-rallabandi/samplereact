import React from 'react'
import { useState, useEffect } from 'react'

function HookCounterone() {
    const [count, setcount] = useState(0)
    const [name,setName]=useState('')

    useEffect(() => {
        console.log('useEffect -updating doucment title')
        document.title = `click ${count} times`
    },[count])
    
    return (
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={() => setcount(count + 1)}>click {count}</button>
        </div>
    )
}

export default HookCounterone
