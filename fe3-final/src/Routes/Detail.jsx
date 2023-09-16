import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';

const Detail = () => {
  const { id } = useParams(); 
  const [dentist, setDentist] = useState(null);

  const { state } = useContext(ContextGlobal);
  const { theme } = state;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setDentist(data))
      .catch(error => console.error('Error fetching dentist:', error));
  }, [id]);

  if (!dentist) {
    return <div>Cargando...</div>;
  }

  return (
    <div className='detail'>  
    <div className={theme}>
      <table>
        <tbody>
          <tr>
            <th>ID Dentista</th>
            <td>{id}</td>
          </tr>
          <tr>
            <th>Nombre</th>
            <td>{dentist.name}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{dentist.email}</td>
          </tr>
          <tr>
            <th>Telefono</th>
            <td>{dentist.phone}</td>
          </tr>
          <tr>
            <th>Sitio web</th>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>   
  );
}
export default Detail;