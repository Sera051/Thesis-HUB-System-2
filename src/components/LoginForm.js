import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthForm.css';
import Header from './Header';
import Footer from './Footer'; 

const LoginForm = ({ onSwitchToRegister }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Logging in:', { email, password });
        navigate('/main');
    };

    

    return (

        <div className="App">
        {/* Header */}
        {/* Header Component */}
      <Header />
  
        {/* Main Content */}
        <main className="main-content">
          {/* Centered Login Form */}
          <div className="login-form">
            <h2>Login</h2>
            <p>Enter your account to continue with Thesis HUB</p>
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
              <button type="submit">Login</button>
            </form>
            <p>
              Don't have an account?{' '}
              <span onClick={onSwitchToRegister} className="switch-link">Register</span>
            </p>
          </div>
        </main>
  
        {/* Footer Component */}
        <Footer />
      </div>
    );
  };
  
        
export default LoginForm;