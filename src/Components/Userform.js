import React, { useState } from 'react'
import UserInput from '../Hooks/UserInput'

function Userform() {

    const [firstName, bindFirstName, resetFirstName] = UserInput('')
    const [lastName, bindlastName, resetLastName] = UserInput('')

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    {/* We can use spread operator {...} */}
                    <input type='text'
                        {...bindFirstName}
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    {/* We can use spread operator {...} */}
                    <input type='text'
                        {...bindlastName}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Userform
