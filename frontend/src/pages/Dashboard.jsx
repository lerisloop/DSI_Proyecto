// src/pages/Dashboard.jsx
import "./Dashboard.css";
import { useState } from "react";

function Dashboard() {
    const [tab, setTab] = useState("perfil");

    return (
        <div className = "container" >

            {/* NAV SUPERIOR */}
            <div className="nav">
                <div>ITM</div>
                <div className="user">
                    <div className="avatar">J</div>
                    Juan García ⌄
                </div>
            </div>

            {/* HEADER USUARIO */}
            <div className="header">
                <div className="avatarBig">J</div>
                <div>
                    <h3>Juan García</h3>
                    <p>Estudiante — Ingeniería de Sistemas</p>
                </div>

                <div className="tabs">
                    <button
                        onClick={() => setTab("perfil")}
                        className={tab === "perfil" ? "activeTab" : "tab"}
                    >
                        Perfil
                    </button>

                    <button
                        onClick={() => setTab("practicas")}
                        className={tab === "practicas" ? "activeTab" : "tab"}
                    >
                        Prácticas
                    </button>

                    <button
                        onClick={() => setTab("cursados")}
                        className={tab === "cursados" ? "activeTab" : "tab"}
                    >
                        Cursados
                    </button>
                </div>
            </div>

            {/* CONTENIDO */}
            <div className="content">
                {tab === "perfil" && <Perfil />}
                {tab === "practicas" && <Practicas />}
                {tab === "cursados" && <Cursados />}
            </div>
        </div>
    );
}
function Perfil() {
    return (
        <div className="grid">
            <div className="card">
                <h3>Información Personal</h3>
                <p><b>Nombre:</b> Juan García</p>
                <p><b>Email:</b> juan@example.com</p>
                <p><b>Edad:</b> 22</p>
                <p><b>Carrera:</b> Ingeniería de Sistemas</p>
                <p><b>Semestre:</b> 6</p>
            </div>

            <div className="card">
                <h3>Hoja de Vida</h3>
                <div className="uploadBox">
                    📄 Subir CV
                    <button className="btn">Subir</button>
                </div>

                <div className="stats">
                    <div className="stat">4<br/>Postulaciones</div>
                    <div className="statGreen">1<br/>Aceptadas</div>
                </div>
            </div>
        </div>
    );
}
function Practicas() {
    return (
        <div>
            <h2>Prácticas Disponibles</h2>

            <input className="search" placeholder="Buscar..." />

            <div className="grid">
                <div className="card">
                    <h4>Practicante Desarrollo Software</h4>
                    <p>Bancolombia</p>
                    <button className="btn">Postularme</button>
                </div>

                <div className="card">
                    <h4>Analista de Datos Jr.</h4>
                    <p>Bancolombia</p>
                    <button className="btn">Postularme</button>
                </div>
            </div>
        </div>
    );
}
function Cursados() {
    return (
        <div>
            <h2>Mis Postulaciones</h2>

            <div className="stats">
                <div className="statYellow">1<br/>En proceso</div>
                <div className="statBlue">1<br/>En selección</div>
                <div className="statBlue">1<br/>Aceptado</div>
                <div className="statGreen">1<br/>Denegado</div>
            </div>

            <div className="card">
                <p><b>Practicante Software</b> - Bancolombia</p>
                <span className="badgeBlue">En selección</span>
            </div>

            <div className="card">
                <p><b>Ingeniería Civil</b> - EPM</p>
                <span className="badgeGreen">Aceptado</span>
            </div>
        </div>
    );
}

export default Dashboard;