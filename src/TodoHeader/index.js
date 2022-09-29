import React from "react";

export const TodoHeader=({children , loading})=>{
    return(
        <header>
            {/* aqui lo que hace el react.clone es clonar a los hijos del componete padre y le agrega como nueva propiedad el loading, pero solo nos clona un solo elemento, es decir, si la propiedad children tiene mas de un componente no retornaria un error*/}
            {/* para poder clonar todos los children del componente y enviarle las propiedades que queramos
            utilizos react.Children.toArray que hara que los childrens pasen a un array y asi iteramos uno por uno. */}
            {React.Children
                        .toArray(children)
                        .map(child=>React.cloneElement(child,{loading}))}
        </header>
    )
}