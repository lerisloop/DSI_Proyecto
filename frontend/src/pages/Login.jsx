// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"
function Login() {
    const navigate = useNavigate();
    const [role, setRole] = useState("Estudiante");
    const handleLogin = (e) => {
        e.preventDefault(); // 🔥 clave

        const user = {
            name: "Juan García",
            email: "juan@example.com",
            role: role
        };

        localStorage.setItem("user", JSON.stringify(user));
        navigate("/dashboard");
    };
    return (
        <div className="container">

            {/* NAV SUPERIOR */}
            <div className="nav">
                <div className="logo">ITM</div>
                <button className="backBtn" onClick={() => navigate("/")}>
                    ← Regresar
                </button>
            </div>

            {/* CARD LOGIN */}
            <div className="card">
                <h2 className="title">Iniciar Sesión</h2>

                <p>Tipo de perfil</p>

                <div className="roles">
                    {["Estudiante", "Administrador", "Empresa"].map(r => (
                        <button
                            key={r}
                            onClick={() => setRole(r)}
                            className={`roleBtn ${role === r ? "activeRole" : ""}`}
                        >
                            {r}
                        </button>
                    ))}
                </div>

                <input
                    className="input"
                    type="email"
                    placeholder="Correo electrónico"
                />

                <div className="passwordBox">
                    <input
                        className="inputNoBorder"
                        type="password"
                        placeholder="Contraseña"
                    />
                    
                </div>

                <form onSubmit={handleLogin}>
                    <button className="loginBtn" type="submit">Iniciar Sesión</button>
                </form>

                <div className="testBox">
                    <p><strong>Credenciales de prueba (Estudiante):</strong></p>
                    <p>Email: juan@example.com</p>
                    <p>Contraseña: 1234</p>
                </div>

                <p style={{ textAlign: "center" }}>
                    ¿No tienes cuenta?{" "}
                    <span
                        className="link"
                        onClick={() => navigate("/register")}
                    >
                Regístrate
            </span>
                </p>
            </div>
        </div>

    );
}


export default Login;