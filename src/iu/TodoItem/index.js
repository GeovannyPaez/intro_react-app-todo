import React from "react";
import './TodoItem.css'

export function TodoItem(props){
    return(
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} 
            onClick={()=>props.onToggleComplete(props.id)}
            >
                {
                    props.completed?
                    <box-icon name='check-double' size='sm'  color='#61dafa'></box-icon>
                    :<box-icon name='check' size='sm'></box-icon>
                }
                
            </span>
            <p  className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span 
                className="Icon Icon-delete"
                onClick={()=>props.onDelete(props.id)}
            >X</span>
            <span 
                className="icon-edict"
                onClick={()=>props.onEdict()}
            >
                <box-icon name='edit' animation='tada-hover' color='#61dafa'></box-icon>
            </span>
            
        </li>
    )
}