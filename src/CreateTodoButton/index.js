import React from "react";
// import { Modal } from "../Modal";
import './CreateTodoButton.css'

 export function CreateTodoButton ({setModal,modal}){
    const onClickBtn= ()=>{
        setModal(!modal);
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
 
