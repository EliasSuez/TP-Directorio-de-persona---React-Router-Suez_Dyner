import React from 'react';
import { useNavigate } from 'react-router-dom';
import personas from '../data/people.json';  // Importás el array de personas

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Listado de Personas</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {personas.map(persona => (
          <li 
            key={persona.id} 
            style={{
              border: '1px solid #ccc', 
              marginBottom: '1rem', 
              padding: '1rem', 
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div>
              <strong>{persona.nombre} {persona.apellido}</strong> - {persona.edad} años
            </div>
            <button
              onClick={() => navigate(`/persona/${persona.id}`)}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Ver más
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
