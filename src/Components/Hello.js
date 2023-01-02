//JSX Example

import React from "react";

const Hello=()=>{
    return React.createElement(
        'div',
        {id:'hello',className:'helloclass'},
        React.createElement('h1',null,'hello veeru'));
}

export default Hello;