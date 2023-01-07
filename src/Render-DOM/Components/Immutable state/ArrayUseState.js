import React, { useState } from 'react'

const initvalue = ['ABCD', 'EFGH']
const ArrayUseState = () => {
    const [persons, setpersons] = useState(initvalue)

    const handleclick = () => {
        const newPersons = [...persons]
        newPersons.push('abcd')
        newPersons.push('efgh')
        setpersons(newPersons)

    }
    console.log('Array rendering..')
    return (
        <div>
            <button onClick={handleclick}>Click</button>
            {
                persons.map(person => (
                    <div key={person}>{person}</div>
                ))
            }
        </div>
    )
}

export default ArrayUseState
