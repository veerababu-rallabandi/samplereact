import React, { Component } from 'react'
import updatedComponent from './WithCounter'

class ClickCounter extends Component {
    render() {
        const { count, incrementcount } = this.props
        return <button onClick={incrementcount}>
            Clicked {count} times
        </button>

    }
}
export default updatedComponent(ClickCounter)
