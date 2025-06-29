import React, { useState } from 'react';
import api from '../api';
import { setToken } from '../auth';
import { useNavigate } from 'react-router-dom';

export default function Login({setIsAuth}) {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post('/users/login', form);
    setToken(res.data.token);
    setIsAuth(true); 
    navigate('/');
  };

  
  return (
    <div className="container mt-5 col-md-4">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {['email', 'password'].map((field) => (
          <div className="mb-3" key={field}>
            <input type={field === 'password' ? 'password' : 'text'} name={field} placeholder={field}
              value={form[field]} onChange={handleChange} className="form-control" required />
          </div>
        ))}
        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}
