import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div style={{ textAlign: 'center', marginBottom: '30px' }}>

      <input
        type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder="Buscar dragones" style={{ padding: '10px', width: '100%', maxWidth: '400px', borderRadius: '5px', border: '1px solid #ccc' }}
      />

    </div>


  );
};

export default SearchBar;
