import React from "react";
import './TodoSearch.css';
// import { TodoContext } from "../App/useTodos";

export function TodoSearch({inputSearchValue,setInputSearchValue}){
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