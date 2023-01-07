import React, { useEffect, useState } from 'react'

function IntervalHookcounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000) //it's equal to componentDidMount

        return () => { // it's equal to componentWillUnMount
            clearInterval(interval)
        }
    }, []) //[] - means dependencies
    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookcounter
