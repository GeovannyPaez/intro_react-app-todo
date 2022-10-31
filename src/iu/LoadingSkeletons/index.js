import React from "react";
import './LoadingSkeletons.css'
export const LoadingSkeletons=()=>{
    return(
        <div className="Loading-container">
            <div className="Loading-container--item">
                <div className="item-left item"></div>
                <div className="item-right item">Cargando Todos!</div>
            </div>
            <div className="Loading-container--item">
                <div className="item-left item"></div>
                <div className="item-right item">Cargando Todos!</div>
            </div>
            <div className="Loading-container--item">
                <div className="item-left item"></div>
                <div className="item-right item">Cargando Todos!</div>
            </div>
        </div>
    )
}