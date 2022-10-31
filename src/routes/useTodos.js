import React from "react";
import { useLocalStorage } from "./useLocalStorage";



function useTodos() {
    const [todos, { saveItem: saveTodos, loading, error}] = useLocalStorage(
        "TODOS_V2",
        []
    );
    const [inputSearchValue, setInputSearchValue] = React.useState("");
    // const [modal,setModal]= React.useState(false);

  // console.log('todos',todos)

    const completeTodos = todos.filter((todo) => todo.isComplete).length;
    const totalTodos = todos.length;

    let todosSearched = [];

    if (!inputSearchValue >= 1) {
        todosSearched = todos;
    } else {
        todosSearched = todos.filter((todo) => {
            const textValue = todo.text.toLowerCase();
            const textValueSearched = inputSearchValue.toLowerCase();

        return textValue.includes(textValueSearched);
        });
    }

  // saveTodo(todosDefault)

    const onToggleComplete = (id) => {
        const todosCopy = [...todos];
        const updateTodos = todosCopy.map((todo) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        saveTodos(updateTodos);
    };

    const onDelete = (id) => {
        const todosCopy = [...todos];
        const indexTodo = todosCopy.findIndex((todo) => todo.id === id);
        todosCopy.splice(indexTodo, 1);
        saveTodos(todosCopy);
    };
    const onEdict = (id,text) => {
        const todosCopy = [...todos];
        const indexTodo = todosCopy.findIndex((todo) => todo.id === id);
        todosCopy[indexTodo].text= text;
        saveTodos(todosCopy);
    };
    const onAdd=text=>{
        const newTodos= [...todos];
        const id = newTodoId(todos)
        newTodos.push({
            completed:false,
            text:text,
            id
        })
        saveTodos(newTodos)
    }
    const states= {
        totalTodos,
        completeTodos,
        inputSearchValue,
        todosSearched,
        loading,
        error,
    }
    const statesUpdaters={
        // setModal,
        onToggleComplete,
        onDelete,
        onAdd,
        onEdict,
        setInputSearchValue,
    }
    
    return (
        {
            states,
            statesUpdaters
        });
}
function newTodoId(todos){
    // console.log(todos);
    if(todos.length === 0){
        return 1;
    }else{
        const ids= todos.map(todo=>todo.id);
        const idMax= Math.max(...ids);
        return idMax +1;
    }
}
export {useTodos}