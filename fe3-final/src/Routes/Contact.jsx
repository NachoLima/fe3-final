import React, { useContext } from 'react';
import Form from '../Components/Form';
import { ContextGlobal } from '../Components/utils/global.context';

const Contact = () => {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;

  return (
    <div className='contact'>
    <div className={theme}>
      <h2>¿Querés mas información?</h2>
      <p>¡Envianos tus datos y nos contactaremos de inmediato! </p>
      <Form/>
    </div>
    </div>
  );
}
export default Contact;
