import React, { Component } from 'react'
import FRInput from './FRInput'

class FRParent extends Component {
    constructor(props) {
        super(props)
        //step 1 : Parent component create ref 
        this.inputRef = React.createRef()
    }

    //step 4
    clickHandler=()=>{
        //we can access native input element
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                {/* step 2 : ref is Attached to child component */}
                <FRInput ref={this.inputRef} />
                <button onClick={this.clickHandler}>FocusInput</button>
            </div>
        )
    }
}

export default FRParent
