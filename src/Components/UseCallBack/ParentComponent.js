import React, { useState, useCallback } from 'react'
import Title from './Title'
import Button from './Button'
import Count from './Count'

function ParentComponent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(5000)

    const IncrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const IncrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [])
    return (
        <div>
            {/* JSX */}
            <Title />
            <Count text='Age' count={age} />
            <Button handleclick={IncrementAge}>Increment Age</Button>
            <Count text='Salary' count={salary} />
            <Button handleclick={IncrementSalary}>Increment salary</Button>
        </div>
    )
}
export default ParentComponent
