import React,{useContext} from 'react'
import {CounterContext} from '../App'

function Component6() {
    const counterContext=useContext(CounterContext)
    return (
        <div>
            Component 6 -{counterContext.countstate}
            <button onClick={() => counterContext.countdispatch('increment')}>Increment</button>
            <button onClick={() => counterContext.countdispatch('decrement')}>decrement</button>
            <button onClick={() => counterContext.countdispatch('reset')}>react</button>
        </div>
    )
}

export default Component6
