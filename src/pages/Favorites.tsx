import React from 'react';
import { usarFavoritos } from '../context/FavoritesContext';
import DragonList from '../components/DragonList';
import EmptyState from '../components/EmptyState';

const Favorites: React.FC = () => {
  const { favoritos } = usarFavoritos();

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Mis Favoritos</h1>

      {favoritos.length === 0 ? (
        <EmptyState message="No tienes dragones favoritos todavia" />

      ) : (
        <DragonList dragones={favoritos} />

      )}



    </div>
  );
};

export default Favorites;
