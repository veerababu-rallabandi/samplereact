import React, { Component } from 'react'

class ClickCounterTwo extends Component {
    render() {
        const { count,increment } = this.props
        return (
            <button onClick={increment}>Click {count}</button>
        )
    }
}
export default ClickCounterTwo
