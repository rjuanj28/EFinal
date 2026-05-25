import React from 'react';

const Loader: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <i className="fas fa-spinner fa-spin" style={{ fontSize: '40px', color: '#3498db', marginBottom: '10px' }}></i>


      <p style={{ fontSize: '18px', color: '#666' }}>Cargando</p>


    </div>
  );
};

export default Loader;
