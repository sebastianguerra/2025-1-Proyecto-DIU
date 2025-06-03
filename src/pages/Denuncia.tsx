import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./IngresarDenuncia.css";

const IngresarDenuncia = () => {
  const [denuncia, setDenuncia] = useState("");
  const [fecha, setFecha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({ denuncia, fecha });

    const numeroSeguimiento = Math.floor(
      10000 + Math.random() * 90000
    ).toString();

    navigate("/", {
      state: {
        showConfirmation: true,
        numeroSeguimiento: numeroSeguimiento,
      },
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
    </div>
  );
};

export default IngresarDenuncia;
