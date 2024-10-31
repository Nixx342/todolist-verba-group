import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem('isLogin') === 'true';
    setIsLogin(loginStatus);
  }, []);

  const handleLogin = () => {
    setIsLogin(true);
    localStorage.setItem('isLogin', 'true');
  };

  const handleLogout = () => {
    setIsLogin(false);
    localStorage.setItem('isLogin', 'false');
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={isLogin ? <Navigate to="/" replace /> : <LoginPage onLogin={handleLogin} />} 
        />
        <Route 
          path="/" 
          element={isLogin ? <HomePage onLogout={handleLogout} /> : <Navigate to="/login" replace />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
