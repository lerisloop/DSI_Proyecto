// src/pages/Dashboard.jsx
import { getSession, logout } from "../utils/session";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const user = getSession();
    const navigate = useNavigate();

    if (!user) {
        navigate("/login");
        return null;
    }

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Dashboard</h2>

            <p>Bienvenido: {user.email}</p>
            <p>Rol: {user.role}</p>

            {user.role === "admin" && (
                <div>
                    <h3>Panel de Administrador</h3>
                    <p>Gestión de usuarios, reportes, etc.</p>
                </div>
            )}

            {user.role === "user" && (
                <div>
                    <h3>Zona de Usuario</h3>
                    <p>Aplicar a prácticas y ver estado</p>
                </div>
            )}

            <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
    );
}

export default Dashboard;