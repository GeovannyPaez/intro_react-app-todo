import React from "react";
import './TodoCounter.css'
import { TodoContext } from "../TodoContext";

export function TodoCounter(){
    const {completeTodos, totalTodos} = React.useContext(TodoContext);
    return(
        <h2 className="TodoCounter">Has completado {completeTodos} de {totalTodos}</h2>
    )
}