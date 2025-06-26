import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <main id="main-content" className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <h1 className="text-5xl font-bold text-blue-700 mb-4">404</h1>
    <p className="text-xl text-gray-700 mb-8">Sorry, the page you are looking for does not exist.</p>
    <Link to="/" className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">Go Home</Link>
  </main>
);

export default NotFound; 