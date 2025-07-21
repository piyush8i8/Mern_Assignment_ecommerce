// src/pages/Login.jsx
import { Link } from 'react-router-dom';
import { BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineTwitter } from 'react-icons/ai';

export default function Login() {
  const handleSubmit = e => {
    e.preventDefault();
    // Auth logic placeholder
  };

  return (
    <section className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg flex w-full max-w-4xl overflow-hidden">
        <div className="hidden md:block md:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/assets/f1-hero.jpg')" }} />
        <div className="w-full p-8 md:w-1/2">
          <h2 className="text-2xl font-bold mb-6">Sign in to your account</h2>
          <div className="flex space-x-4 mb-6">
            <button type="button" className="p-3 bg-blue-600 rounded-full text-white"><BiLogoFacebook /></button>
            <button type="button" className="p-3 bg-blue-400 rounded-full text-white"><AiOutlineTwitter /></button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="email" placeholder="Email" className="w-full p-3 border rounded focus:ring-2 focus:ring-red-500" required />
            <input type="password" placeholder="Password" className="w-full p-3 border rounded focus:ring-2 focus:ring-red-500" required />
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" /> <span>Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-red-600 hover:underline">Forgot Password?</Link>
            </div>
            <button type="submit" className="w-full bg-red-600 text-white py-3 rounded font-medium hover:bg-red-700 transition">Login</button>
          </form>
          <p className="mt-4 text-center text-sm">
            Don’t have an account? <Link to="/signup" className="text-red-600 hover:underline">Sign Up</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
