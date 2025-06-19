import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './componentes/Layout';
import Home from './screens/Home';
import PersonaDetalle from './componentes/PersonaDetalle'
import Estadisticas from './componentes/Estadisticas'
import Formulario from './componentes/Formulario';
import NotFound from './componentes/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="persona/:id" element={<PersonaDetalle />} />
          <Route path="estadisticas" element={<Estadisticas />} />
          <Route path="contacto" element={<Formulario />} /> 
          <Route path="*" element={<NotFound />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
