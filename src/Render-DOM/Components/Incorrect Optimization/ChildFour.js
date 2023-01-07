import React from 'react'

const ChildFour = ({name}) => {
    console.log('childfour render')
    const date=new Date()
    return (
        <div>
           Hello {name}. Current Time is {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
        </div>
    )
}
export default ChildFour
export const MemoizedChildFour=React.memo(ChildFour)
