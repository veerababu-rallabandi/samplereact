 import React from 'react'
 
 const ChildFive = ({name}) => {
    console.log('childFive component')
   return (
     <div>
       Hello {name}
     </div>
   )
 }
 
 export default ChildFive
 export const MemoizedChildFive=React.memo(ChildFive)
 