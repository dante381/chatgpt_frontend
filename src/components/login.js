import './login.css'
function Login(){
    return(
        <div class="logindiv">
            <h1>Login Page</h1>
            
            <input type="text" placeholder="username"></input>
            <br></br>
            <input type="password" placeholder="password"></input>
            <br></br>
            <input type="submit" placeholder="Login"></input>
            <br></br>
        </div>
    );
}
export default Login;