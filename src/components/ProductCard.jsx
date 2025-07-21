// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function ProductCard({ product, onAdd }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden"
    >
      {product.discount && (
        <span className="absolute top-3 left-3 z-10 bg-gradient-to-r from-red-500 to-red-700 text-white text-xs font-semibold px-3 py-1 rounded-lg">
          {product.discount}% OFF
        </span>
      )}

      <div className="relative h-60 bg-gray-100">
        <img
          src={product.image || '/placeholder.png'}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 bg-black bg-opacity-20 transition-opacity">
          <button
            onClick={(e) => {
              e.preventDefault(); // prevent card-level navigation
              onAdd(product);
            }}
            className="bg-white text-gray-800 p-2 rounded-full shadow hover:bg-gray-100"
            aria-label="Add to cart"
          >
            <ShoppingCartIcon className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              alert('Added to wishlist!');
            }}
            className="bg-white text-gray-800 p-2 rounded-full shadow hover:bg-red-100"
            aria-label="Add to wishlist"
          >
            <HeartIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
        <span className="text-sm text-gray-500 uppercase mb-2">{product.category}</span>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              onAdd(product);
            }}
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-5 py-1.5 rounded-full shadow hover:from-red-700 hover:to-red-800 transition"
          >
            Add
          </button>
        </div>
      </div>
    </Link>
  );
}
