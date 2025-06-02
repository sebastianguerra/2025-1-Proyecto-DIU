import React from 'react';
import './ConfirmacionModal.css'; // Archivo de estilos

interface ConfirmacionModalProps {
  isOpen: boolean;
  onClose: () => void;
  numeroSeguimiento: string;
}

const ConfirmacionModal: React.FC<ConfirmacionModalProps> = ({ 
  isOpen, 
  onClose, 
  numeroSeguimiento 
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Denuncia ingresada correctamente!</h2>
        <p>Número de seguimiento: <strong>{numeroSeguimiento}</strong></p>
        <button 
          onClick={onClose}
          className="modal-close-button"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default ConfirmacionModal;