import { Component } from 'react';
import styles from './signup.module.css'

class Signup extends Component{
    constructor(){
        super();
        this.state={
            message:"Sign up Here",
            name:"",
            username:"",
            password:""
        }
    }
    handleNameChange = (event)=>{
        this.setState({
            name : event.target.value
        })
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
    handleSubmit = (event)=>{
        alert(`${this.state.name} ${this.state.username} ${this.state.password}`)
        // event.preventDefault()
    }
    render(){
        return(
            <div className={styles.signupdiv}>
                <form onSubmit={this.handleSubmit}>
                    <h1 className={styles.textcolor}> Signup Page </h1>
                    <label>Name</label>
                    <input type="text" value={this.state.name} onChange={this.handleNameChange}></input>
                    <br></br>
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

export default Signup;