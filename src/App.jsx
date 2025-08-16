import React, { useEffect, useState } from 'react';
import List from './components/List';
import Form from './components/Form';


const API_URL = 'http://localhost:3000/characters';

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [form, setForm] = useState({ name: '', realName: '', universe: '' });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setCharacters(data);
    } catch (error) {
      console.error('Erreur de chargement :', error);
    }
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.realName || !form.universe) {
      alert('Tous les champs sont obligatoires');
      return;
    }

    const method = editId === null ? 'POST' : 'PUT';
    const url = editId === null ? API_URL : `${API_URL}/${editId}`;

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setForm({ name: '', realName: '', universe: '' });
      setEditId(null);
      fetchCharacters();
    }
  };

  const handleEdit = character => {
    setForm({
      name: character.name,
      realName: character.realName,
      universe: character.universe,
    });
    setEditId(character.id);
  };

  const handleDelete = async id => {
    if (!window.confirm('Confirmer la suppression ?')) return;
    const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (res.ok) fetchCharacters();
  };

  const handleCancelEdit = () => {
    setForm({ name: '', realName: '', universe: '' });
    setEditId(null);
  };

 
  return (
    <div className="bg-gradient-to-br from-red-800 via-red-800 to-gray-700 min-h-screen text-white">
      <div className="flex h-screen overflow-hidden">
        
        <div className="w-full md:w-1/3 lg:w-1/4 p-6 overflow-y-auto bg-gray-50 text-black">
        <h1 className='text-red-800 text-3xl text-center mb-5 font-semibold'>MARVEL CHARACTERS</h1>
          <Form
            form={form}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onCancel={handleCancelEdit}
            isEditing={editId !== null}
          />
        </div>
  
        
        <div className="w-full md:w-2/3 lg:w-3/4 p-6 overflow-y-auto">
          <List
            characters={characters}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
  
}
