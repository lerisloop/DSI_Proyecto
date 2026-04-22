// src/components/Empresas.jsx
function Empresas() {
    const empresas = [
        { name: "Bancolombia", sector: "Financiero", color: "#FFD600", letter: "B" },
        { name: "EPM", sector: "Energía", color: "#00A651", letter: "E" },
        { name: "Grupo Éxito", sector: "Retail", color: "#E30613", letter: "G" },
        { name: "Avianca", sector: "Aviación", color: "#D50000", letter: "A" }
    ];

    return (
        <section style={styles.container}>
            <h2 style={styles.title}>Empresas</h2>

            <p style={styles.text}>
                El ITM cuenta con alianzas con las principales empresas del sector para
                ofrecer oportunidades de práctica a sus estudiantes.
            </p>

            <div style={styles.grid}>
                {empresas.map((e, i) => (
                    <div key={i} style={styles.card}>
                        <div style={{ ...styles.circle, background: e.color }}>
                            {e.letter}
                        </div>
                        <h3>{e.name}</h3>
                        <p>{e.sector}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

const styles = {
    container: { padding: "40px" },
    title: {
        background: "#2d2d7a",
        color: "white",
        padding: "10px",
        borderRadius: "8px"
    },
    text: { margin: "20px 0" },
    grid: {
        display: "flex",
        gap: "20px",
        justifyContent: "space-between"
    },
    card: {
        background: "#f5f5f5",
        padding: "20px",
        borderRadius: "12px",
        width: "22%",
        textAlign: "center",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
    },
    circle: {
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto 10px",
        fontWeight: "bold"
    }
};

export default Empresas;