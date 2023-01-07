import React, { Component } from 'react'

class ClassMouse extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         X:0,
         Y:0
         
      }
     
    }
    mouseposition=e=>{
        this.setState({X:e.clientX,Y:e.clientY})
    }

    componentDidMount(){
        window.addEventListener("mousemove",this.mouseposition)
    }
    //cleanup purpose
    // componentWillUnmount(){
    //   console.log('uncomputing code is remove & cleanup memory')
    //   window.removeEventListener('mousemove',this.mouseposition);
    // }
    
  render() {
    return (
      <div>
         x- {this.state.X}-{this.state.Y}
      </div>
    )
  }
}

export default ClassMouse
