import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { TodoForm } from '../../iu/TodoForm';
import { useTodos } from '../useTodos';
export default function Edict() {
  const param= useParams();
  const location= useLocation();
  const id=  Number(param.id);
  const {states, statesUpdaters}= useTodos();
  const todoOfLocation=location.state.todo;
  
  let todoEdict;

  if(states.loading ){
      const todoEdictOfLocalStorage= states.todosSearched.find(t=>t.id===id);
      todoEdict= todoEdictOfLocalStorage;
  }else{
    todoEdict=todoOfLocation
  }
  // console.log(todoEdict,id)
  return (
      <TodoForm 
    label= {'Edita tu TODO'}
    textButton= {'Editar'}
    todoEdict={todoEdict}
    onEdict= {statesUpdaters.onEdict}
    placeholder={'Cargando...'}
    id={id}
   
    />
    )
}
