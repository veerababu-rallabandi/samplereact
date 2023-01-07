import React, { useState } from 'react'

function useCounterCustom(initialcount = 0, value) {
    const [counter, setcounter] = useState(initialcount)

    const increment = () => {
        setcounter(prevcounter => prevcounter + value)
    }

    const decrement = () => {
        setcounter(prevcounter => prevcounter - value)
    }
    const reset = () => {
        setcounter(initialcount)
    }
    return [counter, increment, decrement, reset]
}

export default useCounterCustom
