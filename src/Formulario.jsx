import React, { useState } from "react";

// creacion de los estados en la funcion
function Formulario({agregarPaciente,count}){
    const[nombre,setNombre]= useState('')
    const[edad,setEdad]=useState('')
    const[sintomas,setSintomas]=useState('')
    const[ingreso,setIngreso]=useState('')

    // hago una funcion flecha para crear al paciente
    const ingresarPaciente=(event)=>{
        event.preventDefault() /*utilizo el preventDefault para evitar que se recargue la pagina*/ 
        const paciente={
            nombre,
            edad,
            sintomas,
            ingreso,
            id:count
        }
        // y aca reseteo los campos de cada valor
        agregarPaciente(paciente)
        setNombre('')
        setEdad('')
        setSintomas('')
        setIngreso('')
    }
    {/* creacion del formulario */}
    return( 
    
        // abro el div contenedor de mi formulario y utilizo tailwind para mejorar el aspecto de la pagina
        
        <div className="container py-10 ml-auto mr-auto flex items-center justify-center bg-cyan-200">  
            <div className="w-full md:w-1/2">
                <form id="form" onSubmit={ingresarPaciente} className="bg-white px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <div className="grid grid-flow-row sm:grid-flow-col gap-3">
                            <div className="sm:col-span-4 justify-ceter">
                                <h1 className="text-2xl py-4 decoration-cyan-500">Ingreso de nuevo paciente</h1>

                                <label className="block text-gray-700 text-sm font-bold mb-2">Nombre del Paciente</label>
                                <input  className="border border-gray-300 py-3 px-4 rounded-lg focus:border-indigo-500
                                outline-none focus:ring focus:ring-cyan-500 hover:bg-sky-50"
                                type="text"
                                name="paciente"
                                placeholder="paciente"
                                required
                                value={nombre} onChange={(event)=> setNombre(event.target.value)}/>
                                
                                <label className="block text-gray-700 text-sm font-bold mb-2">Edad del Paciente</label>
                                <input className="border border-gray-300 py-3 px-4 rounded-lg focus:border-indigo-500
                                outline-none focus:ring focus:ring-cyan-500 hover:bg-sky-50"
                                type="text"
                                name="edad"
                                placeholder="edad"
                                required
                                value={edad} onChange={(event)=> setEdad(event.target.value)} />

                                <label className="block text-gray-700 text-sm font-bold mb-2">Síntomas</label>
                                <input className="border border-gray-300 py-3 px-4 rounded-lg focus:border-indigo-500
                                outline-none focus:ring focus:ring-cyan-500 hover:bg-sky-50"
                                type="text"
                                name="sintomas"
                                placeholder="sintomas"
                                required
                                value={sintomas} onChange={(event)=> setSintomas(event.target.value)}/>

                                <label className="block text-gray-700 text-sm font-bold mb-2">Fecha de Ingreso</label>
                                <input className="border border-gray-300 py-3 px-4 rounded-lg focus:border-indigo-500
                                outline-none focus:ring focus:ring-cyan-500 hover:bg-sky-50"
                                type="text"
                                name="fecha"
                                placeholder="fecha"
                                required
                                value={ingreso} onChange={(event)=> setIngreso(event.target.value)} />

                                <button className="bg-cyan-200 px-5 py-2 mx-3  rounded-lg hover:bg-cyan-500 hover:text-white "
                                type="submit"
                                >Ingresar</button>
                            </div>
                        </div>
                    </div>            
                </form>
            </div>    
        </div>


    )
}

export default Formulario
