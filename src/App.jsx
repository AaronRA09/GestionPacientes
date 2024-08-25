import { useState } from 'react'
import Formulario from './Formulario'
import TarjetaDePaciente from './TarjetadePaciente'



function App() {
        // creo el estado de los pacientes
  const [pacientes,setPacientes] = useState([])
        // creo una funcion flecha para agregar los pacientes
  const agregarPaciente =(paciente) =>{
    setPacientes([...pacientes,paciente])

  }
        // creo una funcion flecha para eliminar los pacientes
  const eliminarPaciente =(pacienteAEliminar) =>{
    setPacientes(pacientes.filter((paciente)=>paciente.id!==pacienteAEliminar.id))

  }


  return (
    <>
    {/* le paso los props al formulario */}
      <Formulario agregarPaciente={agregarPaciente} count={pacientes.length}/>
      {
        // utilizo el map para iterar en los pacientes y imprimirlos
        pacientes.map((paciente)=>{
          return(
            // le paso los props al TarjetaDePaciente
            <TarjetaDePaciente paciente={paciente} eliminarPaciente={eliminarPaciente} />
          )
        })
      }
    </>
  )
}

export default App

