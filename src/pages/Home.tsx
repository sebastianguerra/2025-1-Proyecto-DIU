import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MobileNav from "@/components/layout/navigation/mobile_navigation";
import ConfirmacionModal from '@/components/layout/ConfirmacionModal';

function Home() {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [numeroSeguimiento, setNumeroSeguimiento] = useState('');

  useEffect(() => {

    if (location.state?.showConfirmation) {
      setNumeroSeguimiento(location.state.numeroSeguimiento);
      setShowModal(true);
      
      window.history.replaceState({}, '');
    }
  }, [location]);

  return (
    <div className="home-container">
      <h1>Página Principal</h1>

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