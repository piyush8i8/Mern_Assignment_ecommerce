// src/pages/Home.jsx
import { Link } from 'react-router-dom';

export default function Home() {
  const cats = ['tees','jackets','caps','accessories','limited'];
  return (
    <div className="p-8">
      <h1 className="text-5xl font-extrabold">F1 Streetwear</h1>
      <Link
        to="/category/all"
        className="mt-4 inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full shadow-lg hover:from-red-700 hover:to-red-800 transition"
      >
        View All
      </Link>

      <div className="mt-10 flex flex-wrap gap-4">
        {cats.map(c => (
          <Link
            key={c}
            to={`/category/${c}`}
            className="px-5 py-3 border-2 border-gray-300 rounded-full text-lg capitalize
              hover:border-red-600 hover:text-red-700 transition"
          >
            {c}
          </Link>
        ))}
      </div>
    </div>
  );
}
