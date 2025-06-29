import React, { useEffect, useState } from 'react';
import api from '../api';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [editing, setEditing] = useState(null);

  const fetchTodos = async () => {
    const res = await api.get('/todos');
    setTodos(res.data);
  };

  const addOrUpdateTodo = async (e) => {
    e.preventDefault();
    if (editing) {
      await api.put(`/todos/${editing}`, { title });
    } else {
      await api.post('/todos', { title });
    }
    setTitle('');
    setEditing(null);
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await api.delete(`/todos/${id}`);
    fetchTodos();
  };

  const editTodo = (todo) => {
    setEditing(todo._id);
    setTitle(todo.title);
  };

  useEffect(() => { fetchTodos(); }, []);

  return (
    <div className="container mt-5">
      <h2>My Todos</h2>
      <form onSubmit={addOrUpdateTodo} className="d-flex mb-4">
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required className="form-control me-2" placeholder="Enter todo" />
        <button className="btn btn-success">{editing ? 'Update' : 'Add'}</button>
      </form>
      <ul className="list-group">
        {todos.map(todo => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={todo._id}>
            <span>{todo.title}</span>
            <div>
              <button className="btn btn-sm btn-warning me-2" onClick={() => editTodo(todo)}>Edit</button>
              <button className="btn btn-sm btn-danger" onClick={() => deleteTodo(todo._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
