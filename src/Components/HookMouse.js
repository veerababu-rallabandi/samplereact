import React from 'react'
import { useState, useEffect } from 'react'
function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logmouseposition=e=>{
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log("mouse logs")
        window.addEventListener('mousemove',logmouseposition)

        return ()=>{
            console.log('uncomponenting code is removed')
            window.removeEventListener('mousemove',logmouseposition)
        }
    },[])
    //initially added to logmouseposition

    return (
        <div>
            Hooks -{x}-{y}
        </div>
    )
}

export default HookMouse
