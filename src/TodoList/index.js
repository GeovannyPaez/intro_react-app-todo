import React from "react";
// import { TodoSearch } from "../TodoSearch";
import "./TodoList.css"

export function TodoList(props){
    return(
        <section className="TodoList-container">
            <ul>
                {props.error && props.onError()}
                {props.loading && props.onLoading()}
                {(!props.loading && !props.TodosSearched.length)&& props.onEmptyTodos() }

                {/*aqui el map hara la iteracion por cada item del array y le pasara como parametro ese mismo item a la funcion que le eviamos como parametro al metodo map*/ }
                {props.TodosSearched.map(item=>props.render(item))}
            </ul>
        </section>
    )
}




