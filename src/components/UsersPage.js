// src/UsersPage.js
import React, { useState } from 'react';
import './UsersPage.css';
import Sidebar from './Sidebar';
import './Sidebar.css';

const UsersPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([
    { id: 1, name: 'Aldrian Regala', age: 22 },
    { id: 2, name: 'Aaron Adrian', age: 21 },
    { id: 3, name: 'Jericho Reyes', age: 21 },
    { id: 4, name: 'Ivan Reyes', age: 27 },
    // Add more data as needed
  ]);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

    // eslint-disable-next-line no-unused-vars
    const updateData = () => {
      setData([...data, { id: 4, name: 'New Person', age: 30 }]);
    
     };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="main-page">
      <Sidebar isVisible={sidebarVisible} />
      <div className={`content ${sidebarVisible ? 'sidebar-open' : ''}`}>
        <button onClick={toggleSidebar} className="menu-button">
          ☰
        </button>
        <h1>Thesis HUB</h1>
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
    </div>
  );
};

export default UsersPage;
