import React from "react";

export function useStorageListener(){
        const [storageChange,setStorageChange]= React.useState(false);
        window.addEventListener('storage',(change)=>{
            if(change.key === 'TODOS_V1'){
                // console.log('hubo cambios en el local storage');
                setStorageChange(true);
            }
        })
        return{
            show:storageChange
        }
    }