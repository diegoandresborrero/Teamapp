import { Link } from "react-router-dom";


function Usuarios(){
    return (
        <div>
            <nav>
                <br></br>
                <Link className="copy" to='/perfil'>Perfil</Link>
                <br></br>
                <Link className="copy" to='/vehiculos'>Vehiculos</Link>
                <br></br>
                <Link className="copy" to='/ventas'>Ventas</Link>
                <br></br>
                <Link className="copy" to='/usuarios'>Usuarios</Link>
                <br></br>
                <Link className="copy" to='/'>Cerrar sesión</Link>
            </nav>
            <br/>
            <Link class="boton" to="/ingresarcliente">Ingresar cliente</Link>
            <Link class="boton" to="/tablaclientes">Tabla de clientes</Link>
            <br/>



        </div>
    )
}

export default Usuarios;