// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import MainPage from './components/MainPage';
import ThesesPage from './components/ThesesPage';  
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/theses" element={<ThesesPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
