import React from 'react';

export default function List({ characters, onEdit, onDelete }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
      {characters.map(char => (
        <li
          key={char.id}
          className="bg-white p-6 min-h-[20rem] w-full rounded-xl shadow-lg border border-gray-300 hover:shadow-xl transition-shadow flex flex-col justify-between"
        >
          <div className="p-4 flex flex-col items-center w-full max-w-xs">
          <img 
              src={`http://localhost:3000${char.image}`} 
              alt={char.name} 
             className="w-32 h-32 object-contain rounded-full mb-4"
            />
            <h3 className="font-semibold text-xl text-gray-800 whitespace-nowrap">{char.name}</h3>
            <p className="text-gray-600 mt-2">
              <span className="text-gray-800">{char.realName}</span>
            </p>
            <p className="mt-1">
              <span className="italic text-blue-600">{char.universe}</span>
            </p>
          </div>

   <div className="flex justify-between mt-6 gap-2">
        <button 
           onClick={() => onEdit(char)}
           className="flex-1 px-3 py-2 bg-yellow-500 text-white text-sm rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
           >
           Modifier
        </button>
       <button 
           onClick={() => onDelete(char.id)}
           className="flex-1 px-3 py-2 bg-red-500 text-white text-sm rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
           >
           Supprimer
        </button>
   </div>

        </li>
      ))}
    </ul>
  );
}
