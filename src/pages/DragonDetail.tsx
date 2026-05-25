import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { obtenerDetalleDragon } from '../services/DragonService';
import { usarFavoritos } from '../context/FavoritesContext';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

const DragonDetail: React.FC = () => {
  const { nombre } = useParams<{ nombre: string }>();
  const [dragon, setDragon] = useState<any>(null);
  const [cargando, setCargando] = useState(true);
  const [errorMensaje, setErrorMensaje] = useState('');
  const { agregarFavorito, quitarFavorito, esFavorito } = usarFavoritos();

  useEffect(() => {
    const cargar = async () => {
      try {
        if (nombre) {
          const datos = await obtenerDetalleDragon(nombre);
          setDragon(datos);

        }

      } catch (e) {
        setErrorMensaje('No se pudo cargar el detalle del dragon');


      } finally {
        setCargando(false);
      }


    };
    cargar();
  }, [nombre]);

  if (cargando) return <Loader />;

  if (errorMensaje) return <ErrorMessage message={errorMensaje} />;


  if (!dragon) return <ErrorMessage message="No se encontro el dragon" />;

  const esFav = esFavorito(dragon.nombre);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: 'white', borderRadius: '10px' }}>

      <div style={{ textAlign: 'center' }}>
        <img src={dragon.imagen} alt={dragon.nombre} style={{ width: '200px' }} />
        <h1 style={{ textTransform: 'capitalize' }}>{dragon.nombre}</h1>
        <button

          onClick={() => esFav ? quitarFavorito(dragon.nombre) : agregarFavorito(dragon)}
          style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: esFav ? '#ff4d4d' : '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}>
          {esFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}


        </button>
      </div>




      <div style={{ marginTop: '30px' }}>
        <h3>Estadisticas</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>

          {dragon.estadisticas.map((s: any) => (
            <li key={s.nombre} style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between', paddingBottom: '5px' }}>
              <span style={{fontWeight: 'bold' }}>{s.nombre}:</span>
              <span>{s.valor}</span>
            </li>



          ))}
        </ul>
      </div>


      <div style={{ marginTop: '20px', display: 'flex', gap: '20px' }}>
        <p><strong>Peso:</strong> {dragon.peso / 10} kg</p>
        <p><strong>Altura:</strong> {dragon.altura / 10} m</p>
      </div>
    </div>
  );
};

export default DragonDetail;
