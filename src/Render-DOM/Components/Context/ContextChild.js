import React from 'react'
import Child from '../Parent child/Child'

const ChildA = () => {
    console.log('ChildA is render')
    return (
        <>
            <div>
                ChildA
                <ChildB />
            </div>
        </>
    )
}


const ChildB = () => {
    console.log('ChildB is render')
    return (
        <>
            <div>
                ChildB
                <ChildC />
            </div>
        </>
    )
}

const ChildC = () => {
    console.log('ChildC is render')
    return (
        <>
            <div>
                childC
            </div>
        </>
    )
}


export default [ChildA, ChildB, ChildC]



