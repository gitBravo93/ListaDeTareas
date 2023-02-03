import React, { useState } from "react";
import './App.css';
import TareaForm from './componentes/TareaForm.js';
import Tarea from "./componentes/Tarea.js";




function App() {

  const[listaTareas, setListaTareas] = useState([]);

  const nuevaTarea = (tarea) => {
     setListaTareas([tarea, ...listaTareas]);           //expres operador 
     
  }

  const borrar = (id) => {
    const listaFiltrada = listaTareas.filter ((e , index) => index !== id);
    setListaTareas(listaFiltrada);
  }


  const actualizarTarea = (id, tarea) => {
    const listaActualizada = listaTareas.map((e, index) => {
      if(index === id){
        e = tarea;
        
      }
      return e;
  })

    setListaTareas(listaActualizada)
  }

  return (
    <div className='App'>
      <TareaForm 
        nuevaTarea={nuevaTarea}

      />
        <div className="lista">
               {
              listaTareas.map((e, index) => <Tarea 
                                          tarea={e} 
                                          borrar={borrar}
                                          id={index}
                                          editar={actualizarTarea}
                                          />
                 )
        
      
               }
        </div>

    </div>
  );
}

export default App;
