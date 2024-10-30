import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// Пример компонентов страниц
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';

function App() {
  // Переменная для статуса авторизации
  const [isLogin, setIsLogin] = useState(false);

  // Проверка статуса авторизации при монтировании компонента
  useEffect(() => {
    const loginStatus = localStorage.getItem('isLogin') === 'true';
    setIsLogin(loginStatus);
  }, []);

  // Функция для обработки авторизации
  const handleLogin = () => {
    setIsLogin(true);
    localStorage.setItem('isLogin', 'true');
  };

  // Функция для выхода из системы
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
