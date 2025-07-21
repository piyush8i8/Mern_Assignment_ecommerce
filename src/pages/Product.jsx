// src/pages/Product.jsx
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Product() {
  const { id } = useParams();
  
  const variants = [
    { id: 1, name: 'Black', price: 99 },
    { id: 2, name: 'White', price: 99 },
    { id: 3, name: 'Red', price: 109 }
  ];
  const [qty, setQty] = useState(1);
  const [search, setSearch] = useState('');

  const filtered = variants.filter(v => v.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-8 max-w-md mx-auto space-y-6">
      <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg">Product Image {id}</div>
      <h2 className="text-3xl font-bold">F1 Tee #{id}</h2>
      <p className="text-xl font-semibold">${filtered[0]?.price || '—'}</p>

      <input
        type="text"
        placeholder="Search color variants..."
        className="w-full border rounded p-2"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {filtered.length > 0 ? (
        filtered.map(v => (
          <div key={v.id} className="p-3 border rounded hover:bg-gray-50 flex justify-between">
            {v.name} <span>${v.price}</span>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No variants match your search.</p>
      )}

      <div className="flex items-center justify-center space-x-4">
        <button onClick={() => setQty(q => Math.max(1, q - 1))} className="px-3 py-1 bg-gray-300 rounded">−</button>
        <span className="text-lg">{qty}</span>
        <button onClick={() => setQty(q => q + 1)} className="px-3 py-1 bg-gray-300 rounded">＋</button>
      </div>

      <button className="w-full bg-red-600 text-white py-3 rounded font-medium hover:bg-red-700 transition">
        Add to Cart
      </button>
    </div>
  );
}
