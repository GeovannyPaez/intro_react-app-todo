import React, { Children } from "react";
// import { TodoSearch } from "../TodoSearch";
import "./TodoList.css"

export function TodoList({
    children,
    error,
    onError,
    loading,
    onLoading,
    todosSearched,
    onEmptyTodos,
    render,
    totalTodos,
    onEmptySearchResult,
    textSearchValue

}){
    return(
        <section className="TodoList-container">
            <ul>
                {/* {children} */}
                {error && onError()}
                {loading && onLoading()}
                {(!loading && !totalTodos)&& onEmptyTodos()}
                {(!!totalTodos && !todosSearched.length)&& onEmptySearchResult(textSearchValue)}
                {/*aqui el map hara la iteracion por cada item del array y le pasara como parametro ese mismo item a la funcion que le eviamos como parametro al metodo map*/ }
                {todosSearched.map(render || children)}
            </ul>
        </section>
    )
}




