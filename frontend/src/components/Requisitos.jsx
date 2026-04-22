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
                De manera general, algunos requisitos pueden incluir la aprobación de
                determinadas asignaturas, haber alcanzado un semestre específico o
                cumplir con un número mínimo de créditos académicos aprobados.
                Además, se recomienda realizar las prácticas académicas normalmente
                entre el quinto y sexto semestre, etapa en la que el estudiante ya
                posee bases conceptuales y técnicas suficientes para su desempeño profesional. Para todas las carreras es un requisito el haber cursado el preprácticas
            </p>
            <p>
                Para conocer los requisitos específicos correspondientes a tu programa académico, consulta el archivo detallado disponible a continuación,
                donde encontrarás la información organizada por carrera.
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