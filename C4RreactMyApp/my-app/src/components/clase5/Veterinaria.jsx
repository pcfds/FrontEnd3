import React from "react";

const Veterinaria = (props) => {
    return (
        <React.Fragment>
            <h1 className="bg-primary text-center text-white">Mi veterinaria</h1>
            
            {props.perritos.map((perrito, i) => {
                return (<React.Fragment key={perrito.id}>
                    <h2>{perrito.nombre}</h2>
                    <ul >
                        <li key={1}>Edad: {perrito.edad} </li>
                        <li key={2}>Sexo: {perrito.sexo}</li>
                        <li key={3}>Raza: {perrito.raza}</li>
                        <li key={4}>Tamaño: {perrito.tamanio}</li>
                    </ul>
                </React.Fragment>)
            })}
            {props.children}

        </React.Fragment>
    )
}
export default Veterinaria;