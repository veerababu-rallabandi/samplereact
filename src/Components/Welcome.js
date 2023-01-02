import React,{Component} from "react";

class Welcome extends Component{
    render(){
        const {name,subName}=this.props;
        //States way
        //const {stat1,state2}=this.state
        return( 
            <div> 
                <h1>Welcome to {name}</h1>
            </div>

        );
    }
}
export default Welcome;