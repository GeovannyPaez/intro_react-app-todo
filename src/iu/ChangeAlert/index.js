import React from "react";
import { useStorageListener } from "./useStorageListener";
import './changeAlert.css'

export function ChangeAlert(){
    const {show}= useStorageListener();
    if(show){
        return (
            <div className="container-alert">
                <div className="alert">
                    <p>¡Aviso¡</p>
                    <p> Han ocurrido cambios desde otra pestaña del navegador</p>
                    <p>Click <strong>Reload</strong> para Actualizar TODOs</p>
                    <button
                        onClick={()=> {
                        window.location.reload();
                }}
                >Reload</button>
                </div>
                
            </div>
        )
    }else{
        return null
    }
    
}
;