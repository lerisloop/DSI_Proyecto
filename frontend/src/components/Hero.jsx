// src/components/Hero.jsx
function Hero() {
    return (
        <section style={styles.hero}>
            <div style={styles.left}>
                <h1>
                    Bienvenido al sistema de gestión de prácticas académicas
                </h1>

                <p>
                    Este espacio ha sido diseñado para acompañarte en cada etapa de las
                    prácticas profesionales. Aquí podrás consultar requisitos,
                    postularte a empresas y hacer seguimiento a tu proceso.
                </p>

                <p>
                    Nuestro objetivo es conectar tu formación académica con el mundo
                    laboral.
                </p>
            </div>

            <div style={styles.right}>
                <button style={styles.startBtn}>¡Empezar!</button>
            </div>
        </section>
    );
}

const styles = {
    hero: {
        display: "flex",
        justifyContent: "space-between",
        padding: "60px",
        background: "#a7a7b5",
        color: "white"
    },
    left: { width: "60%" },
    right: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    startBtn: {
        background: "#1a1a5e",
        color: "white",
        border: "none",
        padding: "20px 30px",
        borderRadius: "10px",
        fontSize: "18px"
    }
};

export default Hero;