import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only absolute left-2 top-2 bg-blue-700 text-white px-4 py-2 rounded z-50" tabIndex="0">Skip to main content</a>
      <header className="bg-gray-800 text-white py-8" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img src="/journey-beyond-limits.png" alt="Journey Beyond Limits logo" className="h-14 w-auto mr-3" tabIndex="0" />
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
    </>
  );
};

export default Header;
