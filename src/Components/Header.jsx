import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Strictly kept only the pages present in your V3.0 Content File
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Capabilities', path: '/capabilities' },
    { name: 'Workflows', path: '/workflows' },
    { name: 'Company', path: '/company' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#030305]/80 backdrop-blur-xl border-b border-white/5' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo - Strictly Matte & Non-Shiny */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-[#111116] rounded flex items-center justify-center border border-white/10">
                <div className="w-3 h-3 bg-slate-300 rounded-sm"></div>
              </div>
              <span className="text-slate-200 font-medium text-lg tracking-wide drop-shadow-none">
                Athiya Nexa
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Pill Shaped Container */}
          <nav className="hidden md:flex items-center justify-center gap-6 absolute left-1/2 transform -translate-x-1/2 bg-white/[0.02] border border-white/10 rounded-full px-6 py-2.5 backdrop-blur-md shadow-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path 
                    ? 'text-white drop-shadow-sm' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA - Right Aligned (Beta Waitlist CTA from your content) */}
          <div className="hidden md:flex items-center">
            <Link
              to="/beta"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-purple-600/10 border border-purple-500/30 rounded-lg text-sm font-medium text-purple-300 hover:bg-purple-600/20 hover:border-purple-500/50 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <Sparkles className="w-4 h-4" />
              <span>Join Waitlist</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-400 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050508] border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-white/5 flex flex-col">
                <Link
                  to="/beta"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-3 py-3 bg-purple-600/10 border border-purple-500/30 text-purple-300 rounded-lg font-medium"
                >
                  <Sparkles className="w-4 h-4" />
                  Join Waitlist
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;