import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login(props) {
    const [loginValue, setLoginValue] = useState({
        email: "",
        password: ""
    })
    
    const [errorMsg, setErrorMsg] = useState("")


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLoginValue((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };



    function handleLogin(e) {
        e.preventDefault();
        if (email === "admin@example.com" && password === "password") {
            setErrorMsg("")
            props.history.push("/dashboard")
        } else {
            setErrorMsg("Invalid login credentials")
        }
    }

    const { email, password } = loginValue

    return (
        <div>
            <Link to="/">Go back to Home</Link>
            <h1>Login</h1>
            {errorMsg && <p className="error-msg">{errorMsg} ,Not Registered? <Link to="/register">Register here</Link>
            </p>}
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                />
                <br></br>
                <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                />
                <br></br>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login