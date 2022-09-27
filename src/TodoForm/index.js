import React from "react";

import './TodoForm.css'

export function TodoForm({onAdd ,setModal}) {
    const [valueNewTodo,setValueNewTodo]=React.useState(' ');
    const onChange= e=>{
        const value= e.target.value;
        
        setValueNewTodo(value);
    }
    function onSubmit(){
        // e.prevenDeafault();
        console.log(valueNewTodo);
        onAdd(valueNewTodo);
        setModal(false)
    }
    function onCancel(){
        setModal(false);
    }
    return (
    <form>
        <label>Escribe tu nuevo To Do</label>
        <textarea
            value = {valueNewTodo}
            onChange = {onChange}
            placeholder = "Escribe una nueva tarea"
        />
        <div className="TodoForm-buttonContainer">
            <button
                type="button"
                className="TodoForm-button TodoForm-button-cancel"
                onClick = {onCancel}
            >
            Cancelar
            </button>

            <button
                className="TodoForm-button TodoForm-button-add"
                type= "button"
                onClick={onSubmit}
            >
            Añadir
            </button>
            </div>
    </form>)
}
