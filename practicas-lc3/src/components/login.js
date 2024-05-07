import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handleRegister = () => {
    if (username.trim() === '') {
      alert('Usuario inválido para registrarse');
      return;
    }
    
    if (username.toLowerCase().includes('o')) {
      alert('Por favor, ¡Nombres de usuario sin la letra o!');
      return;
    }

    alert('¡Usuario registrado correctamente!');
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Ingrese su nombre de usuario" 
        value={username} 
        onChange={handleChange} 
      />
      <button onClick={handleRegister}>Registrarse</button>
      <p>{username}</p>
    </div>
  );
};

export default Login;