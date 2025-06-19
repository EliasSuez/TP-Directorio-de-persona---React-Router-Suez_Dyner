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
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      padding: '1rem',
      backgroundColor: '#f9f9f9',
      borderBottom: '2px solid #ddd',
      zIndex: 1000,
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
