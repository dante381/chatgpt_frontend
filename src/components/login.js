import { Component } from 'react';
import './login.css'

class Login extends Component{
    constructor(){
        super();
        this.state={
            message:"Login here"
        }
    }
    changemessage(){
        this.setState({
            message:" Logged In "
        })
    }
    render(){
        return(
            <div class="logindiv">
                <h1>{this.state.message}</h1>
                
                <input type="text" placeholder="username"></input>
                <br></br>
                <input type="password" placeholder="password"></input>
                <br></br>
                <button onClick={()=>this.changemessage()}>Login </button>
                <br></br>
            </div>
        );
    }
}

export default Login;