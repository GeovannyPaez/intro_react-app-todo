import React from "react";
import './TodoItem.css'

export function TodoItem(props){
    // const saveTodo=todos=>{
    //     localStorage.setItem('TODOS_V1',JSON.stringify(todos));
    //     props.setTodos(todos);
    //   } 
    // const todos= [...props.todos];

    // const onToggleComplete= ()=>{
    //     const updateTodos= todos.map(todo => {
    //         if(todo.text === props.text){
    //             todo.isComplete= !todo.isComplete;
    //         }
    //         return todo
    //     });
    //     saveTodo(updateTodos);
    // };

    // const onDelete= ()=>{
    //     const indexTodo = todos.findIndex(todo=>todo.text===props.text);
    //     todos.splice(indexTodo,1);
    //     saveTodo(todos);
    // };

    return(
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} 
            onClick={()=>props.onToggleComplete(props.text)}
            >√</span>
            <p  className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span 
                className="Icon Icon-delete"
                onClick={()=>props.onDelete(props.text)}
            >X</span>
        </li>
    )
}