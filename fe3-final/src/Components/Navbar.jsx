import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  const { theme } = state;

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav className={theme}>      
      <ul>        
        <img src="./public/tlcx2.png" alt="tlcicon" />
        <h2>The Lima Company</h2>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
        <li>
          <Link to="/favs">Favoritos</Link>
        </li>
        <li>          
          {theme === "light" ? (<img className='darkimg'src="../public/dark.png" alt="Switch to dark theme" onClick={toggleTheme} style={{ cursor: "pointer" }}/>)
          :(<img className='lightimg'src="../public/light.png" alt="Switch to light theme" onClick={toggleTheme} style={{ cursor: "pointer" }}/>)}
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;