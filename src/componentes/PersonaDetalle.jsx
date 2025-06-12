import React from "react";
import { useParams } from "react-router-dom";
import personas from "../data/people.json"; 

function PersonaDetalle(){

    const id = useParams()


    const PersonaBuscada = personas.find((persona) => persona.id === parseInt(id.id));

    if(!PersonaBuscada)
    { 
        return <h1>La persona con el id: {id} no fue encontrada</h1>
    }

    const msjEdad = () => {
        if(PersonaBuscada.edad < 18) {
            return "Es menor de edad";
        } else if (PersonaBuscada.edad >= 18 ) {
            return "Es adulto";
        }
    }

    return (
        <div style={{padding:'1rem'}}>
            <h2>Detalle de {PersonaBuscada.nombre} {PersonaBuscada.apellido}</h2>
            <p>Edad: {PersonaBuscada.edad} </p>
            <p>Mail {PersonaBuscada.email}</p>
            <p>{msjEdad}</p>
        </div>
    )
}

export default PersonaDetalle;