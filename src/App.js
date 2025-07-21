

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
 
import Home from './pages/Home';
import Category from './pages/Category';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';


export default function App() {
  

  return (
    <BrowserRouter>
      <nav className="bg-gray-900 p-4 text-white flex justify-between">
        <Link to="/" className="text-xl font-bold">F1 Streetwear</Link>
        <div className="space-x-4">
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:slug" element={<Category />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<div className="p-8 text-center">404: Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

