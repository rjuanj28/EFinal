export const obtenerDragones = async () => {
  const respuesta = await fetch('https://pokeapi.co/api/v2/type/dragon');
  const datos = await respuesta.json();
  
  const promesas = datos.pokemon.map(async (p: any) => {
    const res = await fetch(p.pokemon.url);
    const d = await res.json();
    return {
      nombre: d.name,

      imagen: d.sprites.other['official-artwork'].front_default,

      tipos: d.types.map((t: any) => t.type.name)


    };
  });

  return Promise.all(promesas);
};

export const obtenerDetalleDragon = async (nombre: string) => {
  const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);

  const d = await respuesta.json();
  
  return {

    nombre: d.name,
    imagen: d.sprites.other['official-artwork'].front_default,
    tipos: d.types.map((t: any) => t.type.name),
    estadisticas: d.stats.map((s: any) => ({
      nombre: s.stat.name,
      valor: s.base_stat
    })),
    peso: d.weight,
    altura: d.height


  };
};
