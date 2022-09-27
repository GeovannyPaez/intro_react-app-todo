import React from "react";
// import './App.css';
import { useTodos } from "./useTodos";
import {TodoCounter } from "../TodoCounter";
import {TodoSearch} from '../TodoSearch';
import {TodoItem} from '../TodoItem';
import {TodoList} from '../TodoList';
import {CreateTodoButton} from '../CreateTodoButton'

import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { LoadingSkeletons } from "../LoadingSkeletons";
import { TodoHeader } from "../TodoHeader";


function App() {
  const {
    error,
    loading,
    todosSearched,
    onDelete,
    onToggleComplete,
    modal,
    setModal,
    completeTodos, 
    totalTodos,
    inputSearchValue,
    setInputSearchValue,
    onAdd
} = useTodos();
  return (
    <React.Fragment>
            <TodoHeader>
            <TodoCounter
                completeTodos={completeTodos}
                totalTodos={totalTodos}
            />
            <TodoSearch
                inputSearchValue={inputSearchValue}
                setInputSearchValue={setInputSearchValue}
            />
            </TodoHeader>
                    <TodoList
                        error={error}
                        loading={loading}
                        todosSearched={todosSearched}
                        onError={()=><p>Desesperate ha ocurrido un error...</p>}
                        onLoading={()=><LoadingSkeletons/>}
                        onEmptyTodos={()=><p>¡Crear tu primer TODO!</p>}
                        render={(todo)=>(
                            <TodoItem 
                            key={todo.text} 
                            text ={todo.text} 
                            completed ={todo.isComplete}
                            onToggleComplete= {onToggleComplete}
                            onDelete={onDelete}
                            />
                        )}
                        >
                    </TodoList>
                    {/* <TodoList>
                        {error && }
                        {loading && <LoadingSkeletons/>}
                        {(!loading && !todosSearched.length)&& }
                        {todosSearched.map(todo=>(
                            
                        ))}
                    </TodoList> */}
                    {
                        !!modal &&(
                            <Modal>
                                <TodoForm
                                onAdd ={onAdd}
                                setModal={setModal}
                                />
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

export default App;
