import React from 'react'

function EventClick() {
    function clickHandler(){
        console.log("EVENT CLICKING")
    }
  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default EventClick
