import React, { createContext, useContext, useState, ReactNode } from 'react';

const ContextoFavoritos = createContext<any>(null);

export const ProveedorFavoritos: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favoritos, setFavoritos] = useState<any[]>([]);

  const agregarFavorito = (dragon: any) => {
    const existe = favoritos.find(f => f.nombre === dragon.nombre);


    if (!existe) {
      setFavoritos([...favoritos, dragon]);

    }
  };

  const quitarFavorito = (nombreDragon: string) => {


    const nuevosFavoritos = favoritos.filter(f => f.nombre !== nombreDragon);
    setFavoritos(nuevosFavoritos);


  };

  const esFavorito = (nombreDragon: string) => {

    return favoritos.some(f => f.nombre === nombreDragon);


  };

  return (
    <ContextoFavoritos.Provider value={{ favoritos, agregarFavorito, quitarFavorito, esFavorito }}>

      {children}
    </ContextoFavoritos.Provider>


  );
};

export const usarFavoritos = () => useContext(ContextoFavoritos);
