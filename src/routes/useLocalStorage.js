import React from "react";

export function useLocalStorage(itemName, initialValue){
    

    const [state,dispatch]= React.useReducer( reducer , initialState({initialValue}) );

    const {
        loading,
        error,
        item
    }=state;

    // const [loading, setLoading]= React.useState(true)
    // const [error, setError]= React.useState(false)
    // const [item,setItem]= React.useState(initialValue);
    const setError=error=> dispatch({type:actionTypes.setError,payload: error});
    const setLoading=()=>dispatch({type: actionTypes.setLoading});
    const setItem=newItem=> dispatch({type:actionTypes.setItem, payload: newItem});

    const getItem=()=>{
        return JSON.parse(localStorage.getItem(itemName)) ;
    }

    React.useEffect(()=>{
        setTimeout(()=>{
            try {
                let parsetItem= getItem() || initialValue; 
                setItem(parsetItem);
                setLoading(false);
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
        error,
        }
        
    ]
}
const initialState= ({initialValue})=>({
    loading: true,
    error:false,
    item: initialValue
});
const actionTypes = {
    setItem: 'ITEM',
    setLoading: 'LOADING',
    setError: 'ERROR'
}
const reudcerObject=(state, payload)=>{
    return {
        [actionTypes.setItem]:{
            ...state,
            item: payload
        },
        [actionTypes.setError]:{
            ...state,
            error: true
        },
        [actionTypes.setLoading]:{
            ...state,
            loading: false
        }
    }
}
const reducer=(state,action)=>{
    return reudcerObject(state,action.payload)[action.type] || state;
}