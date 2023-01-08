import React, { Component } from 'react'
import updatedComponent from './WithCounter'

class HoverCounter extends Component {
    render() {
        const { count,incrementcount } = this.props
        return (
            <div>
                <h2 onMouseOver={incrementcount}>Hoverd {count} times</h2>
            </div>
        )
    }
}
export default  updatedComponent(HoverCounter)
