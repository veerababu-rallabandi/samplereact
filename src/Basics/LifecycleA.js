import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'veerababu'
        }
        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps() {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifecycleA shouldcompponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('Lifecycle componentDidUpdate')
    }
    changeState=()=>{
        this.setState({
            name:'veera'
        })
    }
    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <button onClick={this.changeState}>Click</button>
                <LifecycleB/>
            </div>
        )
    }
}
export default LifecycleA
