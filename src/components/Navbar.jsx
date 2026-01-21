import { Bars3Icon } from '@heroicons/react/24/solid';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">Sakshi Ippe</h1>
        
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-accent font-medium transition">Home</a>
          <a href="#about" className="text-gray-700 hover:text-accent font-medium transition">About</a>
          <a href="#skills" className="text-gray-700 hover:text-accent font-medium transition">Skills</a>
          <a href="#experience" className="text-gray-700 hover:text-accent font-medium transition">Experience</a>
          <a href="#projects" className="text-gray-700 hover:text-accent font-medium transition">Projects</a>
          <a href="#certifications" className="text-gray-700 hover:text-accent font-medium transition">Certifications</a>
          <a href="#contact" className="text-gray-700 hover:text-accent font-medium transition">Contact</a>
        </div>

        <div className="md:hidden">
          <Bars3Icon className="h-8 w-8 text-primary" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;