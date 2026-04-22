// src/components/Contacto.jsx
function Contacto() {
    return (
        <section style={styles.container}>
            <div style={styles.left}>
                <h2>¡Contacta con nosotros!</h2>
                <p>Campus Fraternidad</p>
                <p>Calle 73 No. 76A - 354, Medellín</p>
                <p>Tel: 604 460 0727</p>
                <p>practicas@itm.edu.co</p>
            </div>

            <div style={styles.right}>
                <form style={styles.form}>
                    <input placeholder="Nombre" />
                    <input placeholder="Apellido" />
                    <input placeholder="Correo" />
                    <textarea placeholder="Mensaje"></textarea>
                    <button>Enviar</button>
                </form>
            </div>
        </section>
    );
}

const styles = {
    container: {
        display: "flex",
        justifyContent: "space-between",
        padding: "60px",
        background: "#0b2a5b",
        color: "white"
    },
    left: { width: "40%" },
    right: { width: "40%" },
    form: {
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        color: "black"
    }
};

export default Contacto;