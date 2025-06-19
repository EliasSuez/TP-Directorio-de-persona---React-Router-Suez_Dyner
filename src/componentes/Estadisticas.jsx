import React from "react";
import personas from "../data/people.json";

function Estadisticas() {
  const cantPersonas = personas.length;
  const mayoresArray = personas.filter(p => p.edad >= 18);
  const menoresArray = personas.filter(p => p.edad < 18);
  const mayoresDe35 = personas.filter(p => p.edad >= 35).length;
  const promedio = (personas.reduce((sum, p) => sum + p.edad, 0) / cantPersonas).toFixed(1);

  return (
    <div style={{
      maxWidth: 600,
      margin: '2rem auto',
      padding: '1.5rem 2rem',
      backgroundColor: '#f9fafb',
      borderRadius: '8px',
      boxShadow: '0 3px 8px rgba(0,0,0,0.1)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#222'
    }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '1.5rem',
        color: '#1a73e8',
        fontWeight: '700'
      }}>Estadísticas</h2>
      <ul style={{
        listStyle: 'none',
        padding: 0,
        fontSize: '1.1rem',
        lineHeight: '1.6'
      }}>
        <li style={{ marginBottom: '1rem' }}>
          <strong>Total de personas:</strong> {cantPersonas}
        </li>
        <li style={{ marginBottom: '1rem', color: '#1a73e8' }}>
          <strong>Mayores de 35 años:</strong> {mayoresDe35}
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <strong>Persona(s) de mayor edad ({mayoresArray.length}):</strong>
          <ul style={{
            marginTop: '0.5rem',
            paddingLeft: '1rem',
            backgroundColor: '#dbeafe',
            borderRadius: '6px'
          }}>
            {mayoresArray.map(p => (
              <li key={p.id} style={{ padding: '0.3rem 0' }}>
                {p.nombre} {p.apellido}
              </li>
            ))}
          </ul>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <strong>Persona(s) de menor edad ({menoresArray.length}):</strong>
          <ul style={{
            marginTop: '0.5rem',
            paddingLeft: '1rem',
            backgroundColor: '#fee2e2',
            borderRadius: '6px'
          }}>
            {menoresArray.map(p => (
              <li key={p.id} style={{ padding: '0.3rem 0' }}>
                {p.nombre} {p.apellido}
              </li>
            ))}
          </ul>
        </li>
        <li style={{ marginTop: '1.5rem', fontSize: '1.2rem' }}>
          <strong>Promedio de edad:</strong> {promedio} años
        </li>
      </ul>
    </div>
  );
}

export default Estadisticas;
