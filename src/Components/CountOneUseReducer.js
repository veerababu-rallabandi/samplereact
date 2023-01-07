import React, { useReducer } from 'react'

//Step 2:
const initialvaluue = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialvaluue
        default:
            return state
    }
}

//Example of useReducer hook
function CountOneUseReducer() {
    //step 1:
    const [count, dispatch] = useReducer(reducer, initialvaluue)
    return (
        <div>
            <h1>count is {count}</h1>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default CountOneUseReducer
