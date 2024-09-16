import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} WHU. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
