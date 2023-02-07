import { Component } from 'react';
import './signup.css';

class Signup extends Component{
    constructor(){
        super();
        this.state={
            message:"Sign up Here"
        }
    }
    changemessage(){
        this.setState({
            message:" Created account"
        })
    }
    render(){
        return(
            <div class="signupdiv">
                <h1> {this.state.message} </h1>
                <input type="text" placeholder="Name"></input>
                <br></br>
                <input type="text" placeholder="username"></input>
                <br></br>
                <input type="password" placeholder="password"></input>
                <br></br>
                <button onClick={()=>this.changemessage()}>Signup </button>
                <br></br>
            </div>
        );
    }
}

export default Signup;