import React from 'react';

const handleSubmit = (e) => {
  e.preventDefault();
}
const Login = () => (
  <div className="container">
    <form>
      <h2>Login</h2>
      <label>Email</label>
      <input type="email" />
      <label>Contraseña</label>
      <input type="password" />
      <button onClick={handleSubmit} type="submit">Ingresar</button>
    </form>
  </div>
);

export default Login;