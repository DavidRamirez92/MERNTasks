import React,{useContext,useEffect} from 'react';
import AuthContext from '../../context/autenticacion/authContext';

const Barra = () => {

    
    //extraer la informacion de autenticacion
    const authContext = useContext(AuthContext);
    const{ usuario, usuarioAutenticado,cerrarSesion } = authContext;

    useEffect(() => {
        usuarioAutenticado();
        //eslint-disable-next-line
    },[]);



    return ( 
        <header className="app-header">
            {usuario && <p className="nombre-usuario">Hola <span>{usuario.nombre}</span></p>}
            

            <nav className="nav-principal">
                <button
                    className="btn btn-blank cerrar-sesion"
                    onClick={()=> cerrarSesion()}
                    >Cerrar Sesion</button>
            </nav>
        </header>
     );
}
 
export default Barra;