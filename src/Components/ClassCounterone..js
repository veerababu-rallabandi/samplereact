import React, { Component } from 'react'

class ClassCounterone extends Component {
    constructor(props) {
        super();
        this.state = {
            count: 0,
            name: ''
        }
    }
    componentDidMount() {
        document.title = `click ${this.state.count} times`;
    }
    componentDidUpdate(prevProps, prevstate) {
        if (prevProps.count !== this.state.count) {

            console.log("updating document title")
            document.title = `click ${this.state.count} times when update`
        }
    }
    render() {
        return (
            <div>
                <input type="text"
                    value={this.state.name}
                    onChange={e => {
                        this.setState({ name: e.target.value })
                    }}
                />
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    click {this.state.count} times</button>
            </div>
        )
    }
}

export default ClassCounterone
