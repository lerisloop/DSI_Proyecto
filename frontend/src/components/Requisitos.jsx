// src/components/Requisitos.jsx
function Requisitos() {
    return (
        <section id="requisitos" style={styles.container}>
            <h2 style={styles.title}>Requisitos</h2>

            <p>
                Los requisitos para iniciar el proceso de prácticas académicas varían
                según la carrera y el plan de estudios de cada programa.
            </p>

            <p>
                De manera general, pueden incluir la aprobación de asignaturas,
                cumplimiento de créditos y requisitos definidos por la institución.
            </p>
        </section>
    );
}

const styles = {
    container: {
        padding: "40px"
    },
    title: {
        background: "#2d2d7a",
        color: "white",
        padding: "10px",
        borderRadius: "8px"
    }
};

export default Requisitos;