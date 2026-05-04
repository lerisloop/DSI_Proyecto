import "./prueba.css"
function prueva(){


    return (
        <div className="loginPage">
            <section>

                <div className="box">
                    <div className="square" style={{ "--i": 0 }}></div>
                    <div className="square" style={{ "--i": 1 }}></div>
                    <div className="square" style={{ "--i": 2 }}></div>
                    <div className="square" style={{ "--i": 3 }}></div>
                    <div className="square" style={{ "--i": 4 }}></div>
                    <div className="container">
                        <div className="form">
                            <h2>Iniciar Sesion</h2>
                            <form>
                                <div className="inputBox">
                                    <input type="text" name="usuario" placeholder="Usuario"/>
                                </div>
                                <div className="inputBox">
                                    <input name="clave" type="password"
                                           placeholder="Contraseña"/>
                                </div>
                                <div className="inputBox">
                                    <input type="submit" value="Ingresar"/>
                                </div>
                                <p className="forget">¿ No tiene una cuenta ?<a>Crear cuenta</a></p>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default prueva;