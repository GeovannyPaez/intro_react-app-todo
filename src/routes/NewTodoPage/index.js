import React from 'react'
import { useNavigate } from 'react-router-dom';
import { TodoForm } from '../../iu/TodoForm'
// import { useLocalStorage } from '../useLocalStorage'
import { useTodos } from '../useTodos';

export default function NewTodo() {
  const {statesUpdaters}= useTodos();

 
  return (
    <TodoForm 
    label= {'¡Añade tu nuevo TODO!'}
    textButton= {'Añadir'} 
    onAdd={statesUpdaters.onAdd}
    placeholder={'Crea tu nuevo TODO!'}
    />
  )
}
