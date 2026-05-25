import React from 'react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#fff5f5', border: '1px solid #feb2b2', borderRadius: '8px', color: '#c53030' }}>


      <i className="fas fa-exclamation-triangle" style={{ fontSize: '30px', marginBottom: '10px' }}></i>

      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
