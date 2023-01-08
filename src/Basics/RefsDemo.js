import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        //create ref object
        this.inputRef = React.createRef()
        this.cbRef = null //callback ref
        this.setCbRef = (element) => {
            this.cbRef = element
        }
    }
    componentDidMount() {
        //In this way no need to mention current.focus()
        console.log(this.cbRef)
        if(this.cbRef){
            this.cbRef.focus()
        }
        //To focus on specific text box
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }

    clickhander = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <input type="text" ref={this.setCbRef} />
                <button onClick={this.clickhander}>clickf</button>
            </div>
        )
    }
}

export default RefsDemo
