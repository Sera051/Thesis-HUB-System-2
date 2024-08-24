import React, { useState, useEffect } from 'react';
import './MainPage.css';
import Date from './Date';
import ProfileModal from './ProfileModal'; // Import the modal component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const MainPage = () => {
  const [query, setQuery] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isProfileModalOpen, setProfileModalOpen] = useState(false); // New state for profile modal

  const toggleProfile = () => {
    setProfileOpen(!isProfileOpen);
  };

  const openProfileModal = () => {
    setProfileModalOpen(true);
    setProfileOpen(false); // Close the dropdown when modal is opened
  };

  const closeProfileModal = () => {
    setProfileModalOpen(false);
  };

  useEffect(() => {
    const searchResults = [
      {
          title: 'TASKGROVE: A TREE-BASED PROJECT MANAGEMENT APPLICATION',
          authors: 'Laxamana, Denzel D., et al.',
          date: 'December 2023',
          link: '#/PDFS/TaskGrove.pdf'
        },
        {
            title: 'COMPAWNION: A PROFILE MANAGEMENT SYSTEM with GEO-LOCATION SYSTEM for NOAH’S ARK DOG AND CAT SHELTER, MABALACAT, PAMPANGA',
            authors: 'De Leon, Aileen P., et al.',
            date: 'December 2023', 
            link: '/PDFS/CS 48_ COMPAWNION with Tables and Figures.pdf'
        
        },
        {
          title: 'CodeQuest:When Java ProgrammingMeets Playful Learning',
          authors: 'Alcantara, Den Dave M., et al.',
          date: 'December 2023',
          link: '#/PDFS/IT-02 CODEQUEST.pdf'
        },
        {
          title: 'HTEFinder: A Web Application Utilizing Geofencing Technology',
          authors: 'CAguas, Angelica P., et al.',
          date: 'December 2023',
          link: '#/PDFS/HTEFINDER_ A Web Application Utilizing Geofencing Technology.pdf'
        },
        {
          title: 'ANTABE: AN INTELLIGENT GUIDE STICK FOR VISUALLY IMPAIRED',
          authors: 'Baquing, Gemiera M., et al.',
          date: 'December 2023',
          link: '#/PDFS/IT29-ANTABE.pdf'
        }
        ,
        {
          title: 'Web-Based Equipment Maintenance Monitoring System for DHVSU Facilities',
          authors: 'Astrologo, Neil Daryl P., et al.',
          date: 'December 2023',
          link: '#/PDFS/IT-22-Web-Based-Equipment-Maintenance-Monitoring-System-for-DHVSU-Facilities-1.pdf'
        },
        {
          title: 'MSWD Online Financial Assistance Program Management System with SMS Notification and Status Tracking',
          authors: 'Bucalin, Christian John Y., et al.',
          date: 'December 2023',
          link: '#/PDFS/MSWD Online Financial Assistance Program Management System with SMS Notification and Status Tracking.pdf'
        },
        {
          title: 'PALE-NGKIHAN: ONLINE MARKET SYSTEM FOR ARAYAT RICE TRADERS',
          authors: 'David, KC Glenn M., et al.',
          date: 'December 2023',
          link: '#/PDFS/IS56- PALENGKIHAN MANUSCRIPT.pdf'
        }
      ];

    const results = searchResults.filter((result) => {
      return (
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.authors.toLowerCase().includes(query.toLowerCase()) ||
        result.date.toLowerCase().includes(query.toLowerCase())
      );
    });
    setFilteredResults(results);
  }, [query]);

  const handleSearch = () => {
    // Search logic here
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const applyDateSelection = () => {
    closeModal();
    handleSearch();
  };
  

  return (
    <div className="main-page">
      <div className="content">
        <header className="header">
          <div className="logo-title">
            <img src="/ccslogo.png" alt="Logo" className="logo" /> {/* Replace with your logo path */}
            <h1>Thesis HUB</h1>
          </div>
          <div className="profile-section">
            <FontAwesomeIcon
              icon={faUserCircle}
              className="profile-icon"
              onClick={toggleProfile}
            />
            {isProfileOpen && (
              <div className="profile-dropdown">
                <button onClick={openProfileModal}>My Profile</button>
                <a href="/login">Logout</a>
              </div>
            )}
          </div>
        </header>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="search-icon"
            onClick={handleSearch}
          />
          <FontAwesomeIcon
            icon={faCalendarAlt}
            className="date-icon"
            onClick={openModal}
          />
        </div>

        <div className="results">
          <h2>Search Results</h2>
          {filteredResults.map((result, index) => (
            <div key={index} className="result-item">
              <a href={result.link} className="result-title">
                {result.title}
              </a>
              <p className="result-authors">{result.authors}</p>
              <p className="result-date">{result.date}</p>
            </div>
          ))}
        </div>
      </div>

      <Date
        isOpen={isModalOpen}
        onClose={closeModal}
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        onApply={applyDateSelection}
      />

      <ProfileModal isOpen={isProfileModalOpen} onClose={closeProfileModal} /> {/* Include the modal */}
    </div>
  );
};

export default MainPage;
