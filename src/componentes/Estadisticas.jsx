import React from "react";
import { useParams } from "react-router-dom";
import personas from "../data/people.json"; 

function Estadisticas () {

    const cantPersonas = personas.length;
    const mayores = personas.filter(p => p.edad >= 18).length;
    const menores = personas.filter(p => p.edad < 18).length;
    const mayoresDe35 = personas.filter(p => p.edad >= 35).length;
    const promedio = personas.reduce((sum, p) => sum + p.edad, 0) / cantPersonas;

    return (
        <div style={{ padding: '1rem' }}>
          <h2>Estadísticas</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><strong>Total de personas:</strong> {cantPersonas}</li>
            <li><strong>Mayores de 35 años:</strong> {mayoresDe35}</li>
            <li>
              <strong>Persona(s) de mayor edad ({mayores} años):</strong>
              <ul>
                {mayores.map(p => (
                  <li key={p.id}>{p.nombre} {p.apellido}</li>
                ))}
              </ul>
            </li>
            <li>
              <strong>Persona(s) de menor edad ({menores} años):</strong>
              <ul>
                {menores.map(p => (
                  <li key={p.id}>{p.nombre} {p.apellido}</li>
                ))}
              </ul>
            </li>
            <li><strong>Promedio de edad:</strong> {promedio} años</li>
          </ul>
        </div>
      );

} 

export default Estadisticas;