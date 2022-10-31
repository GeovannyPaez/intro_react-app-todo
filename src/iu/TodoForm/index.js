import React from "react";
import { useNavigate } from "react-router-dom";

import './TodoForm.css'

export function TodoForm(props) {
    const navigate = useNavigate();
    const [valueNewTodo,setValueNewTodo]=React.useState('');

    const onChange= e=>{
        const value= e.target.value;
        setValueNewTodo(value);
    }
  
    function onSubmit(){
        if (props.textButton!= 'Añadir') {
            props.onEdict(Number(props.id),valueNewTodo);
            navigate('/');
            return;
        } 
            props.onAdd(valueNewTodo);
            navigate('/');
    }

    function onCancel(){
        navigate('/');
    }

    return (
    <form>
        <label>{props.label}</label>
        <textarea
            onChange={onChange}
            placeholder={props.placeholder}
            defaultValue={props.todoEdict? props.todoEdict.text: valueNewTodo}
        > 
        </textarea>
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
            {props.textButton}
            </button>
            </div>
    </form>)
}
