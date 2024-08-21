// src/MainPage.js
import React, { useState } from 'react';
import './MainPage.css';

const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', age: 28 },
    { id: 2, name: 'Jane Smith', age: 34 },
    { id: 3, name: 'Alice Johnson', age: 24 },
    // Add more data as needed
  ]);

   // eslint-disable-next-line no-unused-vars
   const updateData = () => {
    setData([...data, { id: 4, name: 'New Person', age: 30 }]);
  
   };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="main-page">
      <h1>Search and Table Example</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className="search-bar"
      />
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainPage;
