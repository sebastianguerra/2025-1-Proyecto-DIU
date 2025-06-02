import { Routes, Route } from 'react-router-dom';
import Denuncia from './pages/Denuncia';
import Seguimiento from './pages/Seguimiento';
import Perfil from './pages/Perfil';
import Home from './pages/Home';
import TipoDenuncia from './pages/TipoDenuncia'

function App(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/denuncia" element={<Denuncia />} />
      <Route path ="/seguimiento" element ={<Seguimiento />} />
      <Route path="/perfil" element ={<Perfil />} />
      <Route path="/TipoDenuncia" element ={<TipoDenuncia />} />
    </Routes>
  )
}

export default App;