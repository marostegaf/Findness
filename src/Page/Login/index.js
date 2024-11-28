import "./Login.css"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "AuthContext";
import { users } from "users";
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Verifica se o login e senha estão no array de usuários
        const validUser = users.find(
        (user) => user.username === username && user.password === password
        );

        if (validUser) {
            login(username);
            navigate("/"); // Redireciona para o dashboard
        } else {
            setError("Usuário ou senha inválidos");
        }
    };
    return (
        <div className="Login">
            <div className="wrapper">
                <div className="title">Findness</div>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <input
                        type="text"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label>User</label>
                </div>
                <div className="field">
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label>Password</label>
                </div>
                <div className="content">
                    <div className="checkbox">
                    <input type="checkbox" id="remember-me" />
                    <label for="remember-me">Remember me</label>
                </div>
                    <div className="pass-link">
                        <a href="#">Forgot password?</a>
                    </div>
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <div className="field">
                    <input type="submit" value="Login" />
                </div>
                <div className="signup-link">
                    Not a member? <a href="#">Signup now</a>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Login;