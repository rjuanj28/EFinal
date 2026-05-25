import React from 'react';

interface EmptyStateProps {
  message: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message }) => {
  return (
    <div style={{ textAlign: 'center', padding: '40px', backgroundColor: '#f7fafc', border: '1px dashed #cbd5e0', borderRadius: '8px', color: '#718096' }}>

      <i className="fas fa-search" style={{ fontSize: '30px', marginBottom: '10px' }}></i>
      <p>{message}</p>



    </div>
  );
};

export default EmptyState;
