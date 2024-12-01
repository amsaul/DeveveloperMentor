import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Menu, X } from 'lucide-react';

/**
 * Navigation component
 * Provides responsive navigation with mobile menu support
 */
export const Navbar = () => {
  // State for mobile menu toggle
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-background-light border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand name */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-primary" />
              <span className="text-white font-bold text-xl">DevMentor</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/mentors" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Find Mentors
              </Link>
              <Link to="/dashboard" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Dashboard
              </Link>
              <Link 
                to="/signin" 
                className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Sign In
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/mentors"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Find Mentors
            </Link>
            <Link
              to="/dashboard"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Dashboard
            </Link>
            <Link
              to="/signin"
              className="w-full text-left bg-primary hover:bg-primary-hover text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};