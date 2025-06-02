import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/header';
import Denuncia from './pages/Denuncia';
import Seguimiento from './pages/Seguimiento';
import Perfil from './pages/Perfil';
import Home from './pages/Home';
import TipoDenuncia from './pages/TipoDenuncia'

function App() {
  return (
    <>
      <Header />  {/* siempre ocupa todo el ancho */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/IngresarDenuncia" element={<Denuncia />} />
          <Route path="/Seguimiento" element={<Seguimiento />} />
          <Route path="/Perfil" element={<Perfil />} />
          <Route path="/TipoDenuncia" element={<TipoDenuncia />} />
        </Routes>
      </div>
    </>
  );
}

export default App;