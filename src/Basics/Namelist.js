import React from 'react'
import Person from './Person'

function Namelist() {
    const persons = [
        {
            id: 1,
            Name: 'veera'
        },
        {
            id: 2,
            Name: 'veerababu'
        }
    ]
    const names=['veera','veerababu','veera']
    const namelist = names.map((name,index) => <h2 key={index}>{index}{name}</h2>)
    return <div>{namelist}</div>
}

export default Namelist
