import React, { useReducer } from 'react'

//Step 2:
const initialstate = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialstate
        default:
            return state
    }
}

//Example of useReducer hook
function CountThreeUseReducer() {
    //step 1:
    const [count, dispatch] = useReducer(reducer, initialstate)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialstate)
    return (
        <div>
            <h1>count is {count}</h1>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>

            <div>
                <h1>countTwo is {countTwo}</h1>
                <button onClick={() => dispatchTwo('increment')}>Increment</button>
                <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
                <button onClick={() => dispatchTwo('reset')}>Reset</button>
            </div>
        </div>
    )
}

export default CountThreeUseReducer
