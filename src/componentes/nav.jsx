import { NavLink } from 'react-router-dom';

function Nav() {
  const activeStyle = {
    fontWeight: 'bold',
    color: '#007bff',
    textDecoration: 'underline',
  };

  const linkStyle = {
    margin: '0 1rem',
    textDecoration: 'none',
    color: '#333',
  };

  return (
    <nav style={{
      padding: '1rem',
      borderBottom: '2px solid #ddd',
      backgroundColor: '#f9f9f9',
    }}>
      <NavLink to="/" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
        Inicio
      </NavLink>
      <NavLink to="/estadisticas" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
        Estadísticas
      </NavLink>
      <NavLink to="/contacto" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
        Contacto
      </NavLink>
    </nav>
  );
}

export default Nav;
