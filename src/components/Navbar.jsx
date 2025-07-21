import { Link } from 'react-router-dom';
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';

export default function Navbar({ cartCount = 0 }) {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <Link to="/" className="text-3xl font-extrabold tracking-wide hover:text-gray-200 transition">
        F1 Streetwear
      </Link>

      <div className="flex items-center space-x-6">
        <Link to="/cart" className="relative group">
          <ShoppingCartIcon className="h-7 w-7 hover:text-gray-200 transition" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
          <span className="invisible group-hover:visible absolute mt-7 text-xs bg-black bg-opacity-75 px-2 py-1 rounded">
            Cart
          </span>
        </Link>

        <Link to="/login" className="group">
          <UserIcon className="h-7 w-7 hover:text-gray-200 transition" />
          <span className="invisible group-hover:visible absolute mt-7 text-xs bg-black bg-opacity-75 px-2 py-1 rounded">
            Account
          </span>
        </Link>
      </div>
    </nav>
  );
}
