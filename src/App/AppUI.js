import React from "react";

import {TodoCounter } from "../TodoCounter";
import {TodoSearch} from '../TodoSearch';
import {TodoItem} from '../TodoItem';
import {TodoList} from '../TodoList';
import {CreateTodoButton} from '../CreateTodoButton'
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { LoadingSkeletons } from "../LoadingSkeletons";
// import { LoadingSkeletons } from "../LoadingSkeletons";

export function AppUI(){
    const {
        error,
        loading,
        todosSearched,
        onDelete,
        onToggleComplete,
        modal,
        setModal
    } = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
                    <TodoList>
                        {error && <p>Desesperate ha ocurrido un error</p>}
                        {loading && <LoadingSkeletons/>}
                        {(!loading && !todosSearched.length)&& <p>¡Crear tu primer TODO!</p>}
                        {todosSearched.map(todo=>(
                            <TodoItem 
                            key={todo.text} 
                            text ={todo.text} 
                            completed ={todo.isComplete}
                            onToggleComplete= {onToggleComplete}
                            onDelete={onDelete}
                            />
                        ))}
                    </TodoList>
                    {
                        !!modal &&(
                            <Modal>
                                <TodoForm/>
                            </Modal>
                        )
                    }
            <CreateTodoButton 
            setModal={setModal}
            modal={modal}
            />
        </React.Fragment>
    );
}