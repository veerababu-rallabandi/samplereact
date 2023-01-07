import React, { useState } from 'react'
import useCounterCustom  from '../useCounterCustom'

function CounteroneHook() {
    const [counter, increment, decrement, reset] = useCounterCustom(0,2)

    return (
        <div>
            <h1>counter is {counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounteroneHook
