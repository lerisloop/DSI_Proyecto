// src/pages/Home.jsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Requisitos from "../components/Requisitos";
import Empresas from "../components/Empresas";
import Contacto from "../components/Contacto";
function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Requisitos />
            <Empresas />
            <Contacto />
        </>
    );
}

export default Home;