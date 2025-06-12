import { useNavigate } from 'react-router-dom';

function CardPersona({ persona }) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '1rem',
        borderRadius: '8px',
        marginBottom: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
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
          cursor: 'pointer',
        }}
      >
        Ver más
      </button>
    </div>
  );
}

export default CardPersona;
