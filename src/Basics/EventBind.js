import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello guys..'
      }
      //this.clickHandler=this.clickHandler.bind(this)
    }
    // way 4
    clickHandler=()=>{
        this.setState({
            message:'Good bye..'
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* Way 1
        <button onClick={this.clickHandler.bind(this)}>Click-1</button> */}
        {/* Way 2 */}
        {/* <button onClick={()=>this.clickHandler()}>Click-2</button> */}
        {/* Way 3 */}
        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}
export default EventBind
