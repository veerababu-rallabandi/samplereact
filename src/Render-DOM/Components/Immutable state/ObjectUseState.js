import React, { useState } from 'react'

const initvalue = {
    first: 'ABCD',
    last: 'abcd'
}
const ObjectUseState = () => {
    const [person, setperson] = useState(initvalue)

    const changeName = () => {
        //...spread operator
        const newPerson = { ...person }
        newPerson.first = 'vee'
        newPerson.last = 'R'
        setperson(newPerson)
    }
    console.log('ObjectUseState is rendering..')
    return (
        <div>
            <button onClick={changeName}>{person.first} - {person.last}</button>
        </div>
    )
}

export default ObjectUseState
