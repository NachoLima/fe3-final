import React, { useState, useEffect } from "react";
import Card from "../Components/Card";

const Favs = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);
  
  const reloadFavorites = () => {
    const storedFavorites = localStorage.getItem('favorites');
    setFavorites(storedFavorites ? JSON.parse(storedFavorites) : []);
  };

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favorites.map((dentist) => (
          <Card key={dentist.id} {...dentist} onFavChange={reloadFavorites} />
        ))}
      </div>
    </>
  );
};

export default Favs;
