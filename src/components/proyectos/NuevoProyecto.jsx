import React,{useContext, useState} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    //Obtener el state del formulario
     const proyectosContext=useContext(proyectoContext);
     const {formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError} = proyectosContext;

    //State para proyecto
    const [proyecto,guardarProyecto] = useState({
        nombre:''
    });

    //Extraer nombre de proyecto
    const {nombre} = proyecto;

    //Lee el input 
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] :e.target.value
        })
    }

    //Cuando el usuario presiona submit
    const onSubmitProtecto=(e) => {
        e.preventDefault();

        //Validar el proyecto
        if(nombre === ''){
            mostrarError();
            return;
        }

        //agregar al state
        agregarProyecto(proyecto)
        //reiniciar el form 
        guardarProyecto({
            nombre:''
        })
    }

    //mostrar el formulario
    const onClickFormulario = () => {
        mostrarFormulario();
    }
   
    return (
        <> 
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClickFormulario}
            >Nuevo Proyecto</button>

            {formulario ?
                (
                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProtecto}
                    >
                        <input 
                            type="text"
                            className="input-text"
                            placeholder="Nombre Proyecto"
                            name="nombre"
                            value={nombre}
                            onChange={onChangeProyecto}

                        />
                
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Agregar Proyecto"
                        />
                    </form>
                ) : null}

                {errorformulario && <p className="mensaje error">El nombre del Proyecto es Obligatorio</p>}
        </>
     );
}
 
export default NuevoProyecto;