import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLogIn: false
        }
    }

    render() {

        //Short circut operator
        return this.state.isLogIn && <div>Welcome to veerababu</div>

        //Ternary operator
        // return this.state.isLogIn?
        // (<div>Welcome to Veerababu</div>)
        // :(<div>Welcome to Guest</div>)

        // Element variable approach
        // let message
        // if(this.state.isLogIn){
        //     message=<div>Welcome to Veerababu</div>
        // }
        // else{
        //     message=<div>Welcome to Guest</div>
        // }
        // return <div>{message}</div>

        // if (this.state.isLogIn) {
        //     return (
        //         <div>= Welcome to veerababu</div>
        //     )
        // }
        // else {
        //     return (
        //         <div>welcome to Guest</div>
        //     )
        // }

    }
}
export default UserGreeting
