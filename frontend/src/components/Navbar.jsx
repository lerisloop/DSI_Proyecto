// src/components/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={styles.nav}>
            <div style={styles.logo}>ITM</div>

            <div style={styles.links}>
                <a href="#requisitos">Requisitos</a>
                <a href="#empresas">Empresas</a>
                <a href="#ayuda">Ayuda</a>
            </div>

            <div>
                <Link to="/register">
                    <button style={styles.btn}>Nuevo Usuario</button>
                </Link>
                <Link to="/login">
                    <button style={styles.btnOutline}>Iniciar Sesión</button>
                </Link>
            </div>
        </nav>
    );
}

const styles = {
    nav: {
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 30px",
        background: "#0b0b4f",
        color: "white",
        alignItems: "center"
    },
    logo: { fontWeight: "bold" },
    links: { display: "flex", gap: "20px" },
    btn: {
        marginRight: "10px",
        background: "#4c4cff",
        color: "white",
        border: "none",
        padding: "8px 12px",
        borderRadius: "20px"
    },
    btnOutline: {
        background: "transparent",
        color: "white",
        border: "1px solid white",
        padding: "8px 12px",
        borderRadius: "20px"
    }
};

export default Navbar;
