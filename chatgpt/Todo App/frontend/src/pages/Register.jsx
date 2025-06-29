import React, { useState } from 'react';
import api from '../api';
import { setToken } from '../auth';
import { useNavigate } from 'react-router-dom';

export default function Register({setIsAuth}) {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post('/users/register', form);
    setToken(res.data.token);
    setIsAuth(true);
    navigate('/');
  };

  return (
    <div className="container mt-5 col-md-4">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        {['name', 'email', 'password'].map((field) => (
          <div className="mb-3" key={field}>
            <input type={field === 'password' ? 'password' : 'text'} name={field} placeholder={field}
              value={form[field]} onChange={handleChange} className="form-control" required />
          </div>
        ))}
        <button className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
}
