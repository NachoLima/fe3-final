import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './/utils/global.context';

const Card = ({ name, username, id, onFavChange }) => {
  const { state } = useContext(ContextGlobal);
  const dataFromContext = state.data;
  
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setIsFav(isFavorite());
  }, []);

    const isFavorite = () => {
    const favorites = localStorage.getItem('favorites');
    const parsedFavorites = favorites ? JSON.parse(favorites) : [];
    return parsedFavorites.some(fav => fav.id === id);
  };

  const addFav = () => {
    const favorites = localStorage.getItem('favorites');
    const parsedFavorites = favorites ? JSON.parse(favorites) : [];
    const updatedFavorites = [...parsedFavorites, { name, username, id }];
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFav(true);
  };

  const removeFav = () => {
    const favorites = localStorage.getItem('favorites');
    const parsedFavorites = favorites ? JSON.parse(favorites) : [];
    const updatedFavorites = parsedFavorites.filter(fav => fav.id !== id);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFav(false);
  };

  const handleFavClick = (e) => {
    e.stopPropagation();
    if (isFav) {
      removeFav();
    } else {
      addFav();
    }
    onFavChange();
  };

  return (
    <div className="card">
      <img src="images/doctor.jpg" alt="Dentista" />
      <h2>
        <Link to={`/dentista/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          {name}
        </Link>
        - {username}
      </h2>
      <p>ID: {id}</p>
      <div onClick={handleFavClick} className="favButton">
        <img src={isFav ? "../public/sadtooth.png" : "../public/tooth.png"} alt={isFav ? "Remove from Favorites" : "Add to Favorites"} />
      </div>
    </div>
  );
};
export default Card;