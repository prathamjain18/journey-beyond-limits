import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-8" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-white font-bold text-3xl" tabIndex="0">Journey Beyond Limits</h1>
          </div>
          <nav className="hidden md:block" aria-label="Main navigation">
            <ul className="flex items-center text-lg space-x-6 text-white" role="menubar">
              <li role="none">
                <NavLink exact to="/" activeClassName="text-blue-500" role="menuitem" tabIndex="0">Home</NavLink>
              </li>
              <li role="none">
                <NavLink to="/ResearchProjects" activeClassName="text-blue-500" role="menuitem" tabIndex="0">Research</NavLink>
              </li>
              <li role="none">
                <NavLink to="/about" activeClassName="text-blue-500" role="menuitem" tabIndex="0">About</NavLink>
              </li>
              <li role="none">
                <NavLink to="/team" activeClassName="text-blue-500" role="menuitem" tabIndex="0">Team</NavLink>
              </li>
              <li role="none">
                <NavLink to="/getInvolved" activeClassName="text-blue-500" role="menuitem" tabIndex="0">Get Involved</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
