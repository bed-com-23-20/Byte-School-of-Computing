import React, { useState } from 'react';
import '../App.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log('Search term:', searchTerm);
    // Perform search logic here
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search..."
       style={{
          padding: '10px',
         
          width: '300px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          fontFamily: "Studio-Feixen-Sans, Arial",
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          marginLeft: '10px',
          padding: '10px 15px',
          backgroundColor: 'green',/*'#007BFF'*/
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }} 
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
