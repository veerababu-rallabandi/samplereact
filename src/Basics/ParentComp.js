import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'veera'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'veera'
            })
        }, 2000)
    }

    render() {
        console.log('parent componentf')
        return (
            <div>
                ParentComponent
                <MemoComp name={this.state.name} />
                {/* <RegularComp name={this.state.name} />
                <PureComp name={this.state.name} /> */}
            </div>
        )
    }
}

export default ParentComp
