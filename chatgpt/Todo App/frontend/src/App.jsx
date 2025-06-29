import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Todos from './pages/Todos';
import Navbar from './components/Navbar';
import { getToken } from './auth';

function App() {
  const [isAuth, setIsAuth] = useState(!!getToken());

  useEffect(() => {
    // Watch for changes to token (for logout/login)
    const handleStorageChange = () => {
      setIsAuth(!!getToken());
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <Router>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/" element={isAuth ? <Todos /> : <Navigate to="/login" />} />
        <Route path="/register" element={!isAuth ? <Register setIsAuth={setIsAuth} /> : <Navigate to="/" />} />
        <Route path="/login" element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
