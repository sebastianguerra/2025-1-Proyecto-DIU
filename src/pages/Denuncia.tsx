import MobileNav from "@/components/layout/navigation/mobile_navigation";
import { useNavigate } from 'react-router-dom';
import './IngresarDenuncia.css';
import React, { useState } from 'react';

const IngresarDenuncia = () => {
  const [denuncia, setDenuncia] = useState('');
  const [fecha, setFecha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar la denuncia
    console.log({ denuncia, fecha });
    // Redirigir a confirmación o página principal
    navigate('/');
  };

  return (
    <div className="denuncia-container">
      <h1>Ingresar Denuncia</h1>
      
      <form onSubmit={handleSubmit} className="denuncia-form">
        <div className="form-section">
          <h2>Ingrese su denuncia</h2>
          <textarea
            value={denuncia}
            onChange={(e) => setDenuncia(e.target.value)}
            placeholder="Type here..."
            className="denuncia-textarea"
            required
          />
        </div>

        <div className="form-section">
          <h2>Ingrese la fecha del incidente</h2>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="fecha-input"
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-button">
            Enviar
          </button>
        </div>
      </form>
      <MobileNav></MobileNav>
    </div>
  );
};

export default IngresarDenuncia;