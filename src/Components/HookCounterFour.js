import React, { useState } from 'react'

function HookCounterFour() {
    const [Items,setItem]=useState([])


    //Assing array & change array element by using Hooks
    const addItem=()=>{
        setItem([...Items,{
            id:Items.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }
  return (
    <div>
        <button onClick={addItem}>AddItem</button>
      <ul>
        {
            Items.map(item=>(
                <li key={item.id}>{item.value}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default HookCounterFour
