import React from 'react';
import Avengers from '../Images/Avengers.jpeg'

export default function CharacterForm({ form, onChange, onSubmit, onCancel, isEditing }) {
  return (
    <form 
      onSubmit={onSubmit} 
      className="p-6 rounded-lg shadow-md mb-6 relative text-black"
      style={{
        backgroundImage: `url(${Avengers})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
      }}
    >
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-100 mb-1">
            Nom du personnage
          </label>
          <input
            id="name"
            name="name"
            placeholder="Ex: Spider-Man"
            value={form.name}
            onChange={onChange}
            className="w-full px-4 py-2 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          />
        </div>

        <div>
          <label htmlFor="realName" className="block text-sm font-medium text-gray-100 mb-1">
            Nom réel
          </label>
          <input
            id="realName"
            name="realName"
            placeholder="Ex: Peter Parker"
            value={form.realName}
            onChange={onChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          />
        </div>

        <div>
          <label htmlFor="universe" className="block text-sm font-medium text-gray-100 mb-1">
            Univers
          </label>
          <input
            id="universe"
            name="universe"
            placeholder="Ex: Marvel"
            value={form.universe}
            onChange={onChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          />
        </div>
      </div>

      <div className="mt-6 flex space-x-3">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {isEditing ? 'Modifier' : 'Ajouter'}
        </button>
        {isEditing && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Annuler
          </button>
        )}
      </div>
    </form>
  );
}
