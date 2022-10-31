import React from "react";
import { useNavigate } from "react-router-dom";
// import { Modal } from "../Modal";
import './CreateTodoButton.css'

 export function CreateTodoButton (){
    const navigate= useNavigate();
    const onClickBtn= ()=>{
        navigate('/new');
    }
    return(
        <button 
        className="CreateTodoButton"
        onClick={onClickBtn}
        >
            +
        </button>
    )
 }
 
