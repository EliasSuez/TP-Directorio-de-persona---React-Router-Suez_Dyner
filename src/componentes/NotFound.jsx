import React from 'react';

function NotFound() {
  return (
    <div style={{
      padding: '2rem',
      textAlign: 'center',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#555'
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        No encontramos lo que buscás <span role="img" aria-label="triste">😕</span>
      </h2>
      <p>Probá volver a la <a href="/" style={{ color: '#1a73e8', textDecoration: 'underline' }}>página de inicio</a>.</p>
    </div>
  );
}

export default NotFound;
