import React from "react";
import './TodoCounter.css'
// import { TodoContext } from "../App/useTodos";

export function TodoCounter({completeTodos, totalTodos}){
    ;
    return(
        <h2 className="TodoCounter">Has completado {completeTodos} de {totalTodos}</h2>
    )
}