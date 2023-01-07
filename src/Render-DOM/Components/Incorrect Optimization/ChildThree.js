import React from 'react'

const ChildThree = ({children,name}) => {
    console.log('childOne render')
    return (
        <div>
           {children} {name}
        </div>
    )
}
export default ChildThree
export const MemoizedChildThree=React.memo(ChildThree)
