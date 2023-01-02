import React,{Component} from "react";

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:"Welcome to visitors"
        }
    }

    ChangeMessage(){
        this.setState({
            message:'The message is changed..'
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.ChangeMessage()}>Change</button>
           </div>
        );
        
        
    }
}
export default Message;