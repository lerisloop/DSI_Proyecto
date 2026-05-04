// src/pages/Register.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const [role, setRole] = useState("Estudiante");

    const [form, setForm] = useState({
        name: "",
        email: "",
        age: "",
        career: "",
        semester: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        console.log("Registro:", form);
        navigate("/login");
    };

    return (
        <div style={styles.container}>

            {/* NAV */}
            <div style={styles.nav}>
                <div style={styles.logo}>ITM</div>
                <button style={styles.backBtn} onClick={() => navigate("/")}>
                    ← Regresar
                </button>
            </div>

            {/* CARD */}
            <div style={styles.card}>
                <h2 style={styles.title}>Nuevo Usuario</h2>

                <p>Tipo de perfil</p>

                <div style={styles.roles}>
                    {["Estudiante", "Administrador", "Empresa"].map(r => (
                        <button
                            key={r}
                            onClick={() => setRole(r)}
                            style={{
                                ...styles.roleBtn,
                                background: role === r ? "#0b0b4f" : "#f1f1f1",
                                color: role === r ? "white" : "black"
                            }}
                        >
                            {r}
                        </button>
                    ))}
                </div>

                <form onSubmit={handleSubmit}>
                    <input name="name" placeholder="Nombre completo" style={styles.input} onChange={handleChange} />
                    <input name="email" placeholder="Correo electrónico" style={styles.input} onChange={handleChange} />
                    <input name="age" placeholder="Edad" style={styles.input} onChange={handleChange} />
                    <input name="career" placeholder="Carrera" style={styles.input} onChange={handleChange} />
                    <input name="semester" placeholder="Semestre" style={styles.input} onChange={handleChange} />

                    <div style={styles.passwordBox}>
                        <input
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            style={styles.inputNoBorder}
                            onChange={handleChange}
                        />
                        👁️
                    </div>

                    <div style={styles.passwordBox}>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirmar contraseña"
                            style={styles.inputNoBorder}
                            onChange={handleChange}
                        />
                        👁️
                    </div>

                    <button style={styles.submitBtn}>
                        Registrarme como {role}
                    </button>
                </form>

                <p style={{ textAlign: "center" }}>
                    ¿Ya tienes cuenta?{" "}
                    <span style={styles.link} onClick={() => navigate("/login")}>
            Iniciar sesión
          </span>
                </p>
            </div>
        </div>

    );

}
const styles = {
    container: {
        height: "100vh",
        background: "#f2f2f2"
    },
    nav: {
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 30px",
        background: "#0b0b4f",
        color: "white"
    },
    logo: { fontWeight: "bold" },
    backBtn: {
        background: "white",
        border: "none",
        padding: "8px 15px",
        borderRadius: "20px"
    },
    card: {
        width: "360px",
        margin: "60px auto",
        background: "white",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
    },
    title: {
        textAlign: "center",
        color: "#0b0b4f"
    },
    roles: {
        display: "flex",
        gap: "10px",
        marginBottom: "15px"
    },
    roleBtn: {
        flex: 1,
        border: "none",
        padding: "8px",
        borderRadius: "20px",
        cursor: "pointer"
    },
    input: {
        width: "100%",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "8px",
        border: "1px solid #ccc"
    },
    passwordBox: {
        display: "flex",
        alignItems: "center",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "0 10px",
        marginBottom: "10px"
    },
    inputNoBorder: {
        border: "none",
        outline: "none",
        flex: 1,
        padding: "10px"
    },
    submitBtn: {
        width: "100%",
        padding: "12px",
        background: "#1a1a1a",
        color: "white",
        border: "none",
        borderRadius: "8px",
        marginTop: "10px"
    },
    link: {
        color: "#0b0b4f",
        cursor: "pointer",
        fontWeight: "bold"
    }
};

export default Register;