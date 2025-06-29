import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout, getToken } from '../auth';

export default function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">TodoApp</Link>
      <div className="ml-auto">
        {getToken() ? (
          <>
            <Link className="btn btn-outline-light me-2" to="/">Todos</Link>
            <button className="btn btn-warning" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link className="btn btn-outline-light me-2" to="/login">Login</Link>
            <Link className="btn btn-success" to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
