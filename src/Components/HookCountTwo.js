import React,{useState} from 'react'

function HookCountTwo() {
    const initalvalue=0
    const [count,setCount]=useState(initalvalue)

    const IncrementFive=()=>{
        for(let i=0;i<5;i++){
            setCount(previous=>previous+1)
        }
    }

  return (
    <div>
      {count}
      <button onClick={()=>setCount(initalvalue)}>Reset</button>
      <button onClick={()=>setCount(previous=>previous+1)}>Increment</button>
      <button onClick={()=>setCount(previous=>previous-1)}>Decrement</button>
      <button onClick={IncrementFive}>Increment to 5</button>
    </div>
  )
}
export default HookCountTwo
