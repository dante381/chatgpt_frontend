import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';
import "./login.css";

function Login(){
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [res1,setRes1]=useState('');
    const handleUsername = (e) => {
        setUsername(e.target.value);
        //setSubmitted(false);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        //setSubmitted(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username !== ''|| password !== '') {
            axios.post('http://anishkprod.ddns.net:81/login',{
                username:username,
                password:password
            })
            .then(user=>{
                //console.log(user['data']['message']);
                if(user['data']['message']==='1'){
                    setRes1("Login Successful");
                    alert('Login Successful');
                }
                else{
                    setRes1("Login UnSuccessful");
                    alert('Login UnSuccessful');
                }
            })
            .catch(err=>{
                console.log("Login unSuccessful");
            })
        }
    };

    return(
        <div className="Login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" id="username" onChange={handleUsername} placeholder="username" value={username}></input><br></br>
                <input type="password" id="password" onChange={handlePassword} placeholder="password" value={password}></input><br></br>
                <input type="submit" id="submit" value="Submit"></input>
            </form>
            <br></br>
            {/* <Link to="/">GO</Link> */}
            <br></br>
            <div className='res'>
                {res1}
            </div>
            <Outlet/>
        </div>
    );
}

export default Login;