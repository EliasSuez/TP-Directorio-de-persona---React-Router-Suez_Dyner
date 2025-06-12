import { Outlet } from 'react-router-dom';
import Nav from './nav';

function Layout() {
  return (
    <>
      <Nav />
      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
