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
    
    // 1. Aquí iría tu lógica para enviar la denuncia al backend
    console.log({ denuncia, fecha });
    
    // 2. Generar número de seguimiento (simulado)
    const numeroSeguimiento = Math.floor(10000 + Math.random() * 90000).toString();
    
    // 3. Redirigir a home con estado
    navigate('/', { 
      state: { 
        showConfirmation: true,
        numeroSeguimiento: numeroSeguimiento
      }
    });
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
            placeholder="Describa el problema aquí..."
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
            Enviar Denuncia
          </button>
        </div>
      </form>
      
      <MobileNav />
    </div>
  );
};

export default IngresarDenuncia;