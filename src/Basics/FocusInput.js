import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {
    constructor(props) {
        super(props)
        //step 1
        this.componentRef = React.createRef()
    }
    //step 3
    clickhandler = () => {
        this.componentRef.current.focusInput()
    }
    render() {
        return (
            <div>
                {/* step 2 */}
                <Input ref={this.componentRef} />
                <button onClick={this.clickhandler}>click</button>
            </div>
        )
    }
}
export default FocusInput
