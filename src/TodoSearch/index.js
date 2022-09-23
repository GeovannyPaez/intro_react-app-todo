import React from "react";
import './TodoSearch.css';
import { TodoContext } from "../TodoContext";

export function TodoSearch(){
    const {inputSearchValue,setInputSearchValue} = React.useContext(TodoContext)
    const onSearchInputValue=(e)=>{
        // console.log(e.target.value);
        setInputSearchValue(e.target.value)
    }
    return (
            <input
                className="TodoSearch"
                placeholder="Search Todos"
                value={inputSearchValue}
                onChange={onSearchInputValue}
                />
        
    )
}