import React,{useContext} from 'react'
import {CounterContext} from '../App'

//step 2 : use countercontext
function Component1() {
    const counterContext=useContext(CounterContext)
  return (
    <div>
        Component1 -{counterContext.countstate}
        <button onClick={()=>counterContext.countdispatch('increment')}>Increment</button>
        <button onClick={()=>counterContext.countdispatch('decrement')}>decrement</button>
        <button onClick={()=>counterContext.countdispatch('reset')}>react</button>
    </div>
  )
}

export default Component1
