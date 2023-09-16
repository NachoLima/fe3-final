import React, { useState, useEffect, useContext } from 'react';
import Card from '../Components/Card';
import { ContextGlobal } from '../Components/utils/global.context';

const Home = () => {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;

  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setDentists(data))
      .catch(error => console.error('Error fetching dentists:', error));
  }, []);

  return (
    <main className={theme}>
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists.map(dentist => (
          <Card 
            key={dentist.id} 
            name={dentist.name} 
            username={dentist.username}
            id={dentist.id} 
          />
        ))}
      </div>
    </main>
  )
}

export default Home;
