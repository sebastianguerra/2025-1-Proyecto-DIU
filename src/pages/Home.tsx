import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MobileNav from "@/components/layout/navigation/mobile_navigation";
import ConfirmacionModal from '@/components/layout/ConfirmacionModal'; // Asegúrate de crear este componente

function Home() {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [numeroSeguimiento, setNumeroSeguimiento] = useState('');

  useEffect(() => {
    // Verificar si venimos de enviar una denuncia
    if (location.state?.showConfirmation) {
      setNumeroSeguimiento(location.state.numeroSeguimiento);
      setShowModal(true);
      
      // Limpiar el estado de navegación para que no se muestre al recargar
      window.history.replaceState({}, '');
    }
  }, [location]);

  return (
    <div className="home-container">
      <h1>Página Principal</h1>
      
      {/* Contenido adicional de tu home puede ir aquí */}
      
      {/* Modal de confirmación */}
      <ConfirmacionModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        numeroSeguimiento={numeroSeguimiento}
      />
      
      <MobileNav />
    </div>
  );
}

export default Home;