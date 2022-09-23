import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
    const [todos, { saveItem: saveTodos, loading, error }] = useLocalStorage(
        "TODOS_V1",
        []
    );
    const [inputSearchValue, setInputSearchValue] = React.useState("");
    const [modal,setModal]= React.useState(false);

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

    const onToggleComplete = (text) => {
        const todosCopy = [...todos];
        const updateTodos = todosCopy.map((todo) => {
            if (todo.text === text) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        saveTodos(updateTodos);
    };

    const onDelete = (text) => {
        const todosCopy = [...todos];
        const indexTodo = todosCopy.findIndex((todo) => todo.text === text);
        todosCopy.splice(indexTodo, 1);
        saveTodos(todosCopy);
    };
    const onAdd=text=>{
        const newTodos= [...todos];
        newTodos.push({
            completed:false,
            text:text
        })
        saveTodos(newTodos)
    }

    return (
        <TodoContext.Provider value={{
            totalTodos,
            completeTodos,
            inputSearchValue,
            setInputSearchValue,
            todosSearched,
            onToggleComplete,
            onDelete,
            onAdd,
            loading,
            error,
            modal,
            setModal
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext,TodoProvider}