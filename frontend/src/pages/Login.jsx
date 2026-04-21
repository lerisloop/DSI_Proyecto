// src/pages/Login.jsx
import { useState } from "react";
import { login } from "../services/authService";
import { saveSession } from "../utils/session";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const user = await login(email, password);
            saveSession(user);
            navigate("/dashboard");
        } catch (err) {
            setError(err);
        }
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Login</h2>

            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Correo"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <br /><br />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <br /><br />

                <button type="submit">Ingresar</button>
            </form>

            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}

export default Login;