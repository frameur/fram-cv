import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = memo(() => {
  return (
    <div className="notFound">
      <div className="notFoundContent">
        <h3>Désolé cette page n'existe pas !</h3>
        <NavLink exact to="/">
          <i className="fas fa-home"></i>
          <span> Accueil</span>
        </NavLink>
      </div>
    </div>
  );
});

NotFound.displayName = 'NotFound';

export default NotFound;