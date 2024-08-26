import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthForm.css';
import Footer from './Footer'; 
import Header from './Header'

const RegisterForm = ({ onSwitchToLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic here
        if (password === confirmPassword) {
            navigate('/users'); // Redirect to the main page after registration
          } 
        else {
            alert('Passwords do not match!');
          }
        console.log('Registering:', { email, password });
    };

    return (
        <div className="App">
      {/* Header */}
      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <div className="main-content">
        <div className="login-form">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="input-group">
              <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            <div className="input-group">
              <input 
                type="password" 
                placeholder="Confirm Password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                required 
              />
            </div>
            <button type="submit">Register</button>
          </form>
          <p>
            Already have an account? 
            <span onClick={onSwitchToLogin} className="switch-link">Login</span>
          </p>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default RegisterForm;
