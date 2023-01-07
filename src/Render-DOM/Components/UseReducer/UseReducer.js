import React, { useReducer } from 'react'

const initialcount = 0
const reducer = (state, action) => {
    switch (action) {
        case 'Inc':
            return state + 1
        case 'Dec':
            return state - 1
        case 'reset':
            return initialcount
        default:
            return state
    }
}
//Implement increment,decrement & reset of counter by using useReducer Hook.
const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialcount)
    console.log('useReducer rednering..2')
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => dispatch('Inc')}>Increment</button>
            <button onClick={() => dispatch('Dec')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default UseReducer
