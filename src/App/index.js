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
import { ChangeAlert } from "../ChangeAlert";

function App() {
  const {
    states, statesUpdaters} = useTodos();

    const {
        totalTodos,
        completeTodos,
        inputSearchValue,
        todosSearched,
        loading,
        error,
        modal,
    }= states;
    const {
        setModal,
        onToggleComplete,
        onDelete,
        onAdd,
        setInputSearchValue,
    }= statesUpdaters;
    // console.log(loading)
  return (
    <React.Fragment>
            <TodoHeader loading= {loading}>
            <TodoCounter
                completeTodos={completeTodos}
                totalTodos={totalTodos} 
                // loading= {loading}
            />
            <TodoSearch
                inputSearchValue={inputSearchValue}
                setInputSearchValue={setInputSearchValue}
                // loading={loading}
            />
            </TodoHeader>
                    <TodoList
                        textSearchValue={inputSearchValue}
                        totalTodos={totalTodos}
                        error={error}
                        loading={loading}
                        todosSearched={todosSearched}
                        onError={()=><p>Desesperate ha ocurrido un error...</p>}
                        onLoading={()=><LoadingSkeletons/>}
                        onEmptyTodos={()=><p>¡Crear tu primer TODO!</p>}
                        onEmptySearchResult={(searchText)=><p>No se encuentran resultados de <strong>{searchText}</strong></p>}
                        /*en el render prop, enviamos una propiedad con una funcion que retorna un componente hijo
                        
                        y en el componente validamos en que momento ejecutar el render*/
                        render={todo=>(
                            <TodoItem 
                            key={todo.text} 
                            text ={todo.text} 
                            completed ={todo.isComplete}
                            onToggleComplete= {onToggleComplete}
                            onDelete={onDelete}
                            />
                        )}
                        >
                            {/* render Functions, es decir le enviamos una funcion a la propiedad children y en el componenete validamos que se hacee con ella. */}
                            {
                            todo=>(
                            <TodoItem 
                            key={todo.text} 
                            text ={todo.text} 
                            completed ={todo.isComplete}
                            onToggleComplete= {onToggleComplete}
                            onDelete={onDelete}
                            />) 
                            }
                    </TodoList>
                    {/* <TodoList>
                        {error && <p>Desesperate ha ocurrido un error...</p>}
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
            <ChangeAlert/>
        </React.Fragment>
  );
}

export default App;
