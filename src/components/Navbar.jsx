import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClasses = ({ isActive }) =>
    `block px-4 py-2 rounded transition-colors duration-200 ${
      isActive ? 'text-blue-400' : 'text-gray-300 hover:text-white'
    }`;

  return (
    <nav className="bg-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Brand / Logo */}
        <h1 className="text-white text-2xl font-bold">Paste App</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/pastes" className={linkClasses}>
            Pastes
          </NavLink>
        </div>

        {/* Mobile menu toggle button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <NavLink to="/" className={linkClasses} onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/pastes" className={linkClasses} onClick={toggleMenu}>
            Pastes
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
