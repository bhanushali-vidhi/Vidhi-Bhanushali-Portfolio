import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Linkedin, Download, Menu, X } from 'lucide-react';
import { DoodleUnderline } from './Doodles';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Handwritten font for links
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-lg font-hand tracking-wide transition-all duration-200 relative group ${
      isActive ? 'text-ink font-bold' : 'text-pencil hover:text-ink'
    }`;

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-paper/95 z-50 border-b-2 border-dashed border-gray-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Left Corner: Name */}
        <div className="flex-shrink-0 w-1/4 relative">
          <NavLink to="/" className="text-2xl font-bold tracking-tight text-ink font-serif relative z-10">
            Vidhi Bhanushali.
            <DoodleUnderline className="absolute -bottom-2 left-0 w-full h-3 text-blue-400 opacity-60" />
          </NavLink>
        </div>

        {/* Center: Nav Links (Desktop) */}
        <div className="hidden md:flex justify-center space-x-12 w-2/4">
          <NavLink to="/" className={navLinkClass}>
            {({ isActive }) => (
              <>
                Work
                {isActive && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-ink opacity-80 rounded-full"></span>}
              </>
            )}
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
             {({ isActive }) => (
              <>
                About
                {isActive && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-ink opacity-80 rounded-full"></span>}
              </>
            )}
          </NavLink>
        </div>

        {/* Right Corner: Icons & Resume Button (Desktop) */}
        <div className="hidden md:flex justify-end items-center space-x-6 w-1/4">
          <a href="mailto:vvidhi.design@gmail.com" className="text-pencil hover:text-ink transition-colors transform hover:-rotate-12" title="Email Me">
            <Mail size={22} strokeWidth={2} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-pencil hover:text-ink transition-colors transform hover:rotate-12" title="LinkedIn">
            <Linkedin size={22} strokeWidth={2} />
          </a>
          
          {/* Sketchy Download Button */}
          <a 
            href="/resume.pdf" 
            download 
            className="sketch-button flex items-center space-x-2 bg-transparent border-2 border-ink text-ink px-5 py-2 hover:bg-ink hover:text-white font-hand font-bold tracking-wide"
          >
            <span>Resume</span>
            <Download size={16} strokeWidth={2.5} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-ink focus:outline-none">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-paper border-t-2 border-dashed border-gray-300 px-6 py-4 space-y-4">
          <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-hand font-bold text-ink">
            Work
          </NavLink>
          <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-hand font-bold text-pencil">
            About
          </NavLink>
          <div className="pt-4 border-t border-dashed border-gray-300">
             <a 
              href="/resume.pdf" 
              download 
              className="sketch-button flex items-center justify-center w-full space-x-2 border-2 border-ink text-ink px-4 py-3 hover:bg-ink hover:text-white font-hand font-bold"
            >
              <span>Download Resume</span>
              <Download size={18} />
            </a>
          </div>
          <div className="flex justify-center space-x-8 pt-4">
            <a href="mailto:vvidhi.design@gmail.com" className="text-pencil hover:text-ink">
              <Mail size={24} />
            </a>
            <a href="https://linkedin.com" className="text-pencil hover:text-ink">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;