import React from "react";

export function useLocalStorage(itemName, initialValue){
    
    const [loading, setLoading]= React.useState(true)
    const [error, setError]= React.useState(false)
    const [item,setItem]= React.useState(initialValue);


    React.useEffect(()=>{
        setTimeout(()=>{
            try {
                const getItem=()=>{
                    return JSON.parse(localStorage.getItem(itemName)) ;
                }
                
                let parsetItem= getItem() || initialValue; 
    
                setItem(parsetItem);
                setLoading(false)
            } catch (error) {
                setError(error)
            }
        },1000)
    },[])
    

    const saveItem=newItem=>{
        try{
            localStorage.setItem(itemName,JSON.stringify(newItem));
            setItem(newItem);
        }catch(err){
            setError(err);
        }
        
    } 
    return[
        item,
        {
        saveItem,
        loading,
        error
        }
        
    ]
}