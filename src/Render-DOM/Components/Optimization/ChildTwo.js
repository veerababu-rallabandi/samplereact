import React from 'react'

const ChildTwo = () => {
    console.log('childOne render')
    return (
        <div>
            ChildTwo component
        </div>
    )
}
export default ChildTwo
export const MemoizedChildTwo=React.memo(ChildTwo)
