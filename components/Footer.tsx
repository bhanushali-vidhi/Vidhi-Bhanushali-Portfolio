import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t-2 border-dashed border-gray-300 mt-auto bg-paper">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm font-serif text-pencil">
        <p>© {new Date().getFullYear()} Vidhi Bhanushali. All Rights Reserved.</p>
        <div className="mt-4 md:mt-0 flex space-x-6 font-hand text-lg">
            <a href="#" className="hover:text-ink hover:underline decoration-wavy transition-colors">Twitter</a>
            <a href="#" className="hover:text-ink hover:underline decoration-wavy transition-colors">Instagram</a>
            <a href="#" className="hover:text-ink hover:underline decoration-wavy transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;