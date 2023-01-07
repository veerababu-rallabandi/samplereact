import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'veerababu'
        }
        console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps() {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifecycleB shouldcompponentUpdate')
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifecycleB getSnapshotBeforeUpdate')
    }

    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate')
    }

    render() {
        console.log('LifecycleB render')
        return (
            <div></div>
        )
    }
}
export default LifecycleB
