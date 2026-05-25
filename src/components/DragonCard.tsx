import React from 'react';
import { Link } from 'react-router-dom';
import { usarFavoritos } from '../context/FavoritesContext';

const DragonCard: React.FC<{ dragon: any }> = ({ dragon }) => {
  const { agregarFavorito, quitarFavorito, esFavorito } = usarFavoritos();
  const esFav = esFavorito(dragon.nombre);

  const tocarCorazon = (e: any) => {
    e.preventDefault();
    if (esFav) {


      quitarFavorito(dragon.nombre);
    } else {
      agregarFavorito(dragon);
    }


  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', backgroundColor: 'white' }}>
      <div style={{ textAlign: 'center', position: 'relative' }}>
        <img src={dragon.imagen} alt={dragon.nombre} style={{ width: '100px' }} />



        <button

          onClick={tocarCorazon}
          style={{ position: 'absolute', top: '0', right: '0', border: 'none', background: 'none', cursor: 'pointer' }}
        >
          <i className={esFav ? "fas fa-heart" : "far fa-heart"} style={{ color: esFav ? 'red' : 'gray' }}></i>
        </button>
      </div>

      <Link to={`/dragon/${dragon.nombre}`} style={{ textDecoration: 'none', color: 'black' }}>
        <h3>{dragon.nombre}</h3>


      </Link>
      <div>
        {dragon.tipos.map((t: any) => (
          <span key={t} style={{ fontWeight: 'bold', padding: '2px 5px', marginRight: '5px', fontSize: '12px' }}>{t}</span>
        ))}


      </div>
    </div>
  );
};

export default DragonCard;
