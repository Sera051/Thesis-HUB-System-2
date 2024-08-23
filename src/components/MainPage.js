import React, { useState, useEffect } from 'react';
import './MainPage.css';
import SidebarUsers from './SidebarUsers';
import Date from './Date';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

const MainPage = () => {
  const [query, setQuery] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [filteredResults, setFilteredResults] = useState([]);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
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
      <SidebarUsers isVisible={isSidebarVisible} />
      <div className="content">
        <div className="menu-button">
          <FontAwesomeIcon
            icon={faBars}
            onClick={toggleSidebar}
            className="menu-icon"
          />
        </div>
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
    </div>
  );
};

export default MainPage;
