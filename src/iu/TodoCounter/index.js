import React from "react";
import './TodoCounter.css'
// import { TodoContext } from "../App/useTodos";

export function TodoCounter({completeTodos, totalTodos,loading}){
    ;
    const loandingCounter= (loading)=>{
        if(!!loading){
            return 'TodoCounter--skeleton'
        }
        return;
    }
    return(
        <h2 className={`TodoCounter ${loandingCounter(loading)}`}>Has completado {completeTodos} de {totalTodos}</h2>
    )
}