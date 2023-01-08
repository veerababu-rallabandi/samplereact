import React, { Component } from 'react'

class HoverCounterTwo extends Component {
    render() {
        const { count,increment } = this.props
        return (
            <h1 onMouseOver={increment}>Click {count}</h1>
        )
    }
}

export default HoverCounterTwo
