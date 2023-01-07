import React, { useState,useMemo } from 'react'

function CounterMemo() {
    const [counterone, setcounterone] = useState(0)
    const [counterTwo, setcounterTwo] = useState(0)

    const IncrementCounterone = () => {
        setcounterone(counterone + 1)
    }

    const IncrementCounterTwo = () => {
        setcounterone(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        let i=0;
        while(i<2000000)i++
        return counterone % 2 == 0
    },[counterone])
    
    return (
        <div>
            <div>
                <button onClick={IncrementCounterone}>Counter:1 {counterone}</button>
                <span>{isEven ? 'Even' : 'odd'}</span>
            </div>
            <button onClick={IncrementCounterTwo}>Counter:1 {counterTwo}</button>
        </div>
    )
}

export default CounterMemo
