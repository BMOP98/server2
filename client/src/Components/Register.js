import React, { useState } from 'react';
import axios from 'axios';
const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post('http://localhost:5000/registro', { nombre, apellido, correo, contraseña });
      if(resp){
        alert("Usuario Creado Exitosamente");
        window.location.href = "/"
      }
      
    } catch (error) {
      console.error('Error al registrar:', error);
      alert('Hubo un error al registrar. Por favor, intenta de nuevo más tarde.');
    }
  };

  return (
    <div className="login-container"> {/* Aplicando la clase login-container */}
      <h1 className="login-title">Registro</h1> {/* Aplicando la clase login-title */}
      <form onSubmit={handleSubmit} className="login-form"> {/* Aplicando la clase login-form */}
        <div className="form-group"> {/* Aplicando la clase form-group */}
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="form-group"> {/* Aplicando la clase form-group */}
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div className="form-group"> {/* Aplicando la clase form-group */}
          <label htmlFor="correo">Correo:</label>
          <input
            type="text"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div className="form-group"> {/* Aplicando la clase form-group */}
          <label htmlFor="contraseña">Contraseña:</label>
          <input
            type="password"
            id="contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
        </div>
        <button type="submit" className="login-button">Registrarse</button> {/* Aplicando la clase login-button */}
      </form>
    </div>
  );
};
export default Registro;
