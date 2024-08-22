import React, { useState } from 'react';
import './ThesesPage.css';

const ThesesPage = () => {
  const [theses, setTheses] = useState([
    { id: 1, title: 'Deep Learning in AI', author: 'John Doe', year: 2023 },
    { id: 2, title: 'Quantum Computing Basics', author: 'Jane Smith', year: 2022 },
    { id: 3, title: 'Blockchain Technology', author: 'Alice Johnson', year: 2021 },
    { id: 4, title: 'Cybersecurity Trends', author: 'Ivan Reyes', year: 2023 },
  ]);
  const [newThesis, setNewThesis] = useState({ title: '', author: '', year: '' });
  const [editingId, setEditingId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [thesisToDelete, setThesisToDelete] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewThesis({ ...newThesis, [name]: value });
  };

  const addThesis = () => {
    const newId = theses.length > 0 ? theses[theses.length - 1].id + 1 : 1;
    setTheses([...theses, { id: newId, ...newThesis }]);
    setNewThesis({ title: '', author: '', year: '' });
  };

  const editThesis = (id) => {
    const thesis = theses.find((thesis) => thesis.id === id);
    setNewThesis(thesis);
    setEditingId(id);
  };

  const saveThesis = () => {
    setTheses(
      theses.map((thesis) =>
        thesis.id === editingId ? { ...thesis, ...newThesis } : thesis
      )
    );
    setNewThesis({ title: '', author: '', year: '' });
    setEditingId(null);
  };

  const openModal = (id) => {
    setIsModalOpen(true);
    setThesisToDelete(id);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setThesisToDelete(null);
  };

  const confirmDelete = () => {
    setTheses(theses.filter((thesis) => thesis.id !== thesisToDelete));
    closeModal();
  };

  const filteredTheses = theses.filter(
    (thesis) =>
      thesis.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      thesis.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      thesis.year.toString().includes(searchQuery)
  );

  return (
    <div className="container">
      <div className="admin-page">
        <h1>Theses Compilation - Admin Panel</h1>
        <input
          type="text"
          placeholder="Search theses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
        <table className="theses-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTheses.map((thesis) => (
              <tr key={thesis.id}>
                <td>{thesis.title}</td>
                <td>{thesis.author}</td>
                <td>{thesis.year}</td>
                <td>
                  <button onClick={() => editThesis(thesis.id)} className="edit-button">Edit</button>
                  <button onClick={() => openModal(thesis.id)} className="delete-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="thesis-form">
          <h2>{editingId ? 'Edit Thesis' : 'Add New Thesis'}</h2>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newThesis.title}
            onChange={handleInputChange}
            className="form-input"
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={newThesis.author}
            onChange={handleInputChange}
            className="form-input"
          />
          <input
            type="text"
            name="year"
            placeholder="Year"
            value={newThesis.year}
            onChange={handleInputChange}
            className="form-input"
          />
          <button onClick={editingId ? saveThesis : addThesis} className="save-button">
            {editingId ? 'Save Changes' : 'Add Thesis'}
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Confirm Deletion</h2>
            <p>Are you sure you want to delete this thesis?</p>
            <div className="modal-buttons">
              <button onClick={confirmDelete} className="confirm-button">Yes, Delete</button>
              <button onClick={closeModal} className="cancel-button">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThesesPage;
