import "./login.css";

function Login(){
    return(
        <div className="Login">
            <h1>Login</h1>
            <form>
                <input type="text" id="username" placeholder="username"></input><br></br>
                <input type="password" id="password" placeholder="password"></input><br></br>
                <input type="submit" id="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default Login;