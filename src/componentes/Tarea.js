import React, { useState } from "react";
import '../App.css';

const Tarea = (props) => {
    const [modoEdit, setModoEdit] = useState(false);
    const [editText, setEditText] = useState("");

    const editar = () => {
        setModoEdit(true);
    }

    const manejarEdit = (e) => {
        setEditText(e.target.value);
    }

    const submitEdit = (e) => {
        e.preventDefault();
        props.editar(props.id, editText)
        setEditText ("");
        setModoEdit(false);
    }

    const borrarTarea = () => {
        props.borrar(props.id);
    }

    return (
       <div>   

            {
                !modoEdit ? 
                <div className="tarea">
                   <span className="tareapointer">{props.tarea}</span>
                   <span className="pointer1" onClick={editar}>Editar</span>
                   <span className="pointer" onClick={borrarTarea}>Borrar</span>
               </div>
               :
               <form className="formEdit" onSubmit={submitEdit}>
                 <input value={editText} onChange={manejarEdit} /> <button>Guardar</button>
               </form>
            } 
           

       </div>


    )
}

export default Tarea;