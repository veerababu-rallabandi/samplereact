 import React from 'react'
 import '../Basics/Stylecss.css';
 
 function Stylesheet(props) {
    let className=props.primary?'primary':''
   return (
     <div>
       <h2 className={`${className} font-xl`}>Veerababu</h2>
     </div>
   )
 }
 
 export default Stylesheet
 