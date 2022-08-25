import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    const [auth, setAuth] = useState({username: "", password: ""});

    const [serverResponse, setServerResponse] = useState("");

    const handleSubmit = () => {
        console.log(auth);
    }

    const handleChange = (e) => {
        setAuth({...auth, [e.target.name]:e.target.value});
    }

    return (
        <div className="container">
            <form className="single-task-form" onSubmit={handleSubmit}>
                <h4>Login</h4>
                <div className="form-control">
                    <label htmlFor="name">Username</label>
                    <input type="text" name="username" className="task-edit-name" value={auth.username} onChange={handleChange}/>
                </div>
                <div className="form-control">
                    <label htmlFor="name">Password</label>
                    <input type="text" name="password" className="task-edit-name" value={auth.password} onChange={handleChange}/>
                </div>
                <button type="submit" className="block btn task-edit-btn">Login</button>
                <div className="form-alert">{serverResponse}</div>
            </form>
            <Link to="/signup" className="btn back-link">Sign Up</Link>
        </div>
    );

}

export default Login;