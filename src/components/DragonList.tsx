import React from 'react';
import DragonCard from './DragonCard';

const DragonList: React.FC<{ dragones: any[] }> = ({ dragones }) => {
  return (



    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
      {dragones.map((dragon) => (

        <DragonCard key={dragon.nombre} dragon={dragon} />


      ))}


    </div>
  );
};

export default DragonList;
