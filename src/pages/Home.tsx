import React, { useEffect, useState } from 'react';
import { obtenerDragones } from '../services/DragonService';
import DragonList from '../components/DragonList';
import SearchBar from '../components/SearchBar';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

const Home: React.FC = () => {
  const [dragones, setDragones] = useState<any[]>([]);
  const [cargando, setCargando] = useState(true);
  const [errorMensaje, setErrorMensaje] = useState('');
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    const cargar = async () => {
      try {
        const datos = await obtenerDragones();
        setDragones(datos);


      } catch (e) {
        setErrorMensaje('No se pudieron cargar los dragones');

      } finally {
        setCargando(false);

      }
    };
    cargar();
  }, []);

  const dragonesFiltrados = dragones.filter(d => 
    d.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  if (cargando) return <Loader />;
  if (errorMensaje) return <ErrorMessage message={errorMensaje} />;

  return (

    <div>
      <h1 style={{ textAlign: 'center' }}>Lista de Dragones</h1>
      <SearchBar value={busqueda} onChange={setBusqueda} />
      <DragonList dragones={dragonesFiltrados} />


    </div>
  );
};

export default Home;
