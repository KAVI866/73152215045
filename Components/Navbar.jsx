import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-700 text-white p-4 flex justify-between items-center flex-wrap">
    <h1 className="text-xl font-bold">MyShop</h1>
    <div className="space-x-4 text-sm sm:text-base">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
    </div>
  </nav>
);

export default Navbar;