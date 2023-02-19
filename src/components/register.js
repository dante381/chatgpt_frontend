import React,{useState} from 'react';
import { ReactDOM } from 'react';
import axios from 'axios';
import './register.css';



function Register(){
    const [username,setUsername]=useState('');
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [password,setPassword]=useState('');

    const handleUsername = (e) => {
        setUsername(e.target.value);
        //setSubmitted(false);
    };
    const handleName = (e) => {
        setName(e.target.value);
        //setSubmitted(false);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
        //setSubmitted(false);
    };
    const handlePhone = (e) => {
        setPhone(e.target.value);
        //setSubmitted(false);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        //setSubmitted(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username !== ''|| password !== '' || email!=='' || phone!=='' || name!=='') {
            axios.post('http://anishkprod.ddns.net:81/register',{
                username:username,
                password:password,
                name:name,
                phone:phone,
                email:email
            })
            .then(user=>{
                //console.log(user['data']['message']);
                if(user['data']['message']==='1'){
                    console.log("Registration Successful");
                    alert('Registration Successful');
                }
                else{
                    console.log("Registration UnSuccessful");
                    alert('Registration UnSuccessful');
                }
            })
            .catch(err=>{
                console.log(err);
            })
        }
    };

    return(
        <div className="Register">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" id="name" onChange={handleName} placeholder="Name" value={name}></input><br></br>
                <input type="text" id="username" onChange={handleUsername} placeholder="Username" value={username}></input><br></br>
                <input type="text" id="email" onChange={handleEmail} placeholder="Email" value={email}></input><br></br>
                <input type="text" id="phone" onChange={handlePhone} placeholder="Phone No" value={phone}></input><br></br>
                <input type="password" id="password" onChange={handlePassword} placeholder="Password" value={password}></input><br></br>
                <input type="submit" id="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default Register;