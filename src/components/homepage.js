import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, Link } from "react-router-dom";
import "./homepage.css"

function Homepage(){

    return (
        <div className='Homepage'>
            <div className='buttons'>
                <button>Login</button> <button>Register</button>
            </div>
        </div>
    );
}

export default Homepage;