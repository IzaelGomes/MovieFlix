import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link className="logo" to="/">
        {' '}
        MovieFlix{' '}
      </Link>
      <Link className="favoritos" to="/Favorite">
        Meus Filmes
      </Link>
    </header>
  );
};

export default Header;
