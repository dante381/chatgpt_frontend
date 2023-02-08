import './register.css';

function Register(){
    return(
        <div className="Register">
            <h1>Register</h1>
            <form>
                <input type="text" id="username" placeholder="Username"></input><br></br>
                <input type="password" id="password" placeholder="Password"></input><br></br>
                <input type="password" id="password" placeholder="Confirm Password"></input><br></br>
                <input type="submit" id="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default Register;