import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './componentes/Layout';
import Home from './screens/Home';
// import PersonaDetalle from './components/PersonaDetalle'
// import Estadisticas from './components/Estadisticas'
// import Contacto from './pages/Contacto'
// import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* Otras rutas: */}
          {/* <Route path="persona/:id" element={<PersonaDetalle />} /> */}
          {/* <Route path="estadisticas" element={<Estadisticas />} /> */}
          {/* <Route path="contacto" element={<Contacto />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
