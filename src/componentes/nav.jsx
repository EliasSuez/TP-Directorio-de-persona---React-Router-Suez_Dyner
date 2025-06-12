import { NavLink } from 'react-router-dom';

function nav() {
  const activeStyle = {
    fontWeight: 'bold',
    color: '#007bff',
  };

  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Inicio
      </NavLink>{' '}
      |{' '}
      <NavLink to="/estadisticas" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Estadísticas
      </NavLink>{' '}
      |{' '}
      <NavLink to="/contacto" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Contacto
      </NavLink>
    </nav>
  );
}

export default nav;
