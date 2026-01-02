import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/solid';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <div className="text-2xl font-bold text-primary">Sakshi Ippe</div>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-700 hover:text-accent">Home</a>
          <a href="#about" className="text-gray-700 hover:text-accent">About</a>
          <a href="#skills" className="text-gray-700 hover:text-accent">Skills</a>
          <a href="#experience" className="text-gray-700 hover:text-accent">Experience</a>
          <a href="#projects" className="text-gray-700 hover:text-accent">Projects</a>
          <a href="#certifications" className="text-gray-700 hover:text-accent">Certifications</a>
          <a href="#contact" className="text-gray-700 hover:text-accent">Contact</a>
        </div>
        <div className="md:hidden">
          <Bars3Icon className="h-6 w-6 text-primary" /> {/* We'll add mobile toggle later */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;