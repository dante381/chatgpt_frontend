import { Component } from 'react';
import './login.css'
import styles from './login.module.css'

class Login extends Component{
    constructor(){
        super();
        this.state={
            username:"",
            password:""
        }
    }
    handleUsernameChange = (event)=>{
        this.setState({
            username : event.target.value
        })
    }
    handlePasswordChange = (event)=>{
        this.setState({
            password : event.target.value
        })
    }
    handleSubmit = () => {
        alert(`${this.state.username} ${this.state.password}`)
    }
    render(){
        return(
            <div class="logindiv">
                <form onSubmit={this.handleSubmit}>
                    <h1 className={styles.textcolor}> Login </h1>
                    
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange}></input>
                    <br></br>
                    <label>Password</label>
                    <input type="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
                    <br></br>
                    <button type="submit">Signup </button>
                    <br></br>
                </form>
            </div>
        );
    }
}

export default Login;