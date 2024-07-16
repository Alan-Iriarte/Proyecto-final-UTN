import React from 'react';

const handleSubmit = (e) => {
  e.preventDefault();
}
const Register = () => (
  <div className="container">
    <form>
      <h2>Registro</h2>
      <label>Nombre</label>
      <input type="text" />
      <label>Apellido</label>
      <input type="text" />
      <label>Email</label>
      <input type="email" />
      <label>Contraseña</label>
      <input type="password" />
      <button onClick={handleSubmit} type="submit">Registrar</button>
    </form>
  </div>
);

export default Register;