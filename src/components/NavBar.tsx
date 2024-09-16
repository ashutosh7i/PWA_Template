import Link from 'next/link';
import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <a className="text-white text-xl font-bold">
          Wake Him Up - NavBar
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
