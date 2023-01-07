import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParenctComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parent:'Parent'
      }
      this.greeting=this.greeting.bind(this)
    }
    
    greeting(Child){
       alert(`Hello ${this.state.parent} from ${Child}`)
    }

  render() {
    return (
      <div>
        {/* Pass greeting reference to child component */}
        <ChildComponent greetHandler={this.greeting}/>
      </div>
    )
  }
}

export default ParenctComponent
