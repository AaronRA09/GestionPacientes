import React from "react";

// creo la funcion y le paso los 2 props
function TarjetaDePaciente({paciente,eliminarPaciente}){
    // creo una funcion flecha para eliminar al paciente
    const quitarPaciente=(event)=>{
        event.preventDefault()
        
        eliminarPaciente(paciente)
    }

    return(
        // creo la tarjeta para mostrar el paciente con el boton para eliminarlo en caso de ser necesario
        <div className=" bg-white rounded-xl shadow-xl pt-auto pb-auto mx-auto">
            <p className="text-xl mt-3 px-10">{'Nombre: '+ paciente.nombre}</p>
            <p className="text-xl mt-3 px-10">{'Edad: '+ paciente.edad}</p>
            <p className="text-xl mt-3 px-10">{'Sintomas: '+ paciente.sintomas}</p>
            <p className="text-xl mt-3 px-10">{'Ingreso: '+ paciente.ingreso}</p>
            <button className="bg-cyan-200 px-10 my-12 rounded-lg hover:bg-cyan-500 hover:text-white "
            type="submit" 
            onClick={(event)=>quitarPaciente(event)}>Eliminar Paciente</button>
        </div>

    )
}
export default TarjetaDePaciente