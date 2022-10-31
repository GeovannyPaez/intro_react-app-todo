import React from "react";
// import './App.css';
import { useTodos } from "../useTodos";
import {TodoCounter } from "../../iu/TodoCounter";
import {TodoSearch} from '../../iu/TodoSearch';
import {TodoItem} from '../../iu/TodoItem';
import {TodoList} from '../../iu/TodoList';
import {CreateTodoButton} from '../../iu/CreateTodoButton'

// import { Modal } from "../../iu/Modal";
// import { TodoForm } from "../../iu/TodoForm";
import { LoadingSkeletons } from "../../iu/LoadingSkeletons";
import { TodoHeader } from "../../iu/TodoHeader";
import { ChangeAlert } from "../../iu/ChangeAlert";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate= useNavigate();
  const {
    states, statesUpdaters} = useTodos();

    const {
        totalTodos,
        completeTodos,
        inputSearchValue,
        todosSearched,
        loading,
        error,
        // modal,
    }= states;
    const {
        // setModal,
        onToggleComplete,
        onDelete,
        // onAdd,
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
                            id= {todo.id}
                            completed ={todo.isComplete}
                            onToggleComplete= {onToggleComplete}
                            onDelete={onDelete}
                            onEdict= {()=>navigate('/edit/'+todo.id,{
                                state: {todo}
                            })}
                            />
                        )}
                        >
                            {/* render Functions, es decir le enviamos una funcion a la propiedad children y en el componenete validamos que se hacee con ella. */}
                            {
                            todo=>(
                            <TodoItem 
                            key={todo.text} 
                            text ={todo.text} 
                            id= {todo.id}
                            completed ={todo.isComplete}
                            onToggleComplete= {onToggleComplete}
                            onDelete={onDelete}
                            onEdict={()=>console.log('on edict')}
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
                    {/* {
                        !!modal &&(
                            <Modal>
                                <TodoForm
                                onAdd ={onAdd}
                                setModal={setModal}
                                />
                            </Modal>
                        )
                    } */}
            <CreateTodoButton 
            // setModal={setModal}
            // modal={modal}
            />
            <ChangeAlert/>
        </React.Fragment>
  );
}

export default HomePage;
