import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-white font-bold text-3xl">Journey Beyond Limits</h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center text-lg space-x-6 text-white">
              <li>
                <NavLink exact to="/" activeClassName="text-blue-500">Home</NavLink>
              </li>
              <li>
                <NavLink to="/services" activeClassName="text-blue-500">Services</NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="text-blue-500">About</NavLink>
              </li>
              <li>
                <NavLink to="/team" activeClassName="text-blue-500">Team</NavLink>
              </li>
              {/* Add more links as needed */}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
