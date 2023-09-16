import React, { useState } from 'react';

const Form = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullName.length > 5 && validateEmail(email)) {
      setMessage(`Gracias ${fullName}, te contactaremos lo antes posible vía mail`);
      setFullName('');
      setEmail('');
    } else {
      setMessage('Por favor verifique su información nuevamente');
    }
  };

  return (
    <div className='ponform'>
      <form onSubmit={handleSubmit} className="centered-form">
        <div>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Nombre completo"
          />
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};
export default Form;