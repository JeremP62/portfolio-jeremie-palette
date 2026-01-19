import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A]/90 backdrop-blur-lg border-b border-[#334155]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink 
            to="/" 
            className="text-2xl font-black bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            JP
          </NavLink>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `text-base font-medium transition-colors duration-300 hover:text-[#06B6D4] ${
                    isActive ? 'text-[#06B6D4]' : 'text-[#F1F5F9]'
                  }`
                }
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `text-base font-medium transition-colors duration-300 hover:text-[#06B6D4] ${
                    isActive ? 'text-[#06B6D4]' : 'text-[#F1F5F9]'
                  }`
                }
              >
                À propos
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/projects" 
                className={({ isActive }) => 
                  `text-base font-medium transition-colors duration-300 hover:text-[#06B6D4] ${
                    isActive ? 'text-[#06B6D4]' : 'text-[#F1F5F9]'
                  }`
                }
              >
                Projets
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `text-base font-medium transition-colors duration-300 hover:text-[#06B6D4] ${
                    isActive ? 'text-[#06B6D4]' : 'text-[#F1F5F9]'
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* CTA Button Desktop */}
          <NavLink
            to="/contact"
            className="hidden md:block border-2 border-[#06B6D4] text-[#06B6D4] px-6 py-2 rounded-lg font-semibold hover:bg-[#06B6D4] hover:text-[#0F172A] transition-all"
          >
            Me contacter
          </NavLink>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#F1F5F9] focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col gap-4">
              <li>
                <NavLink 
                  to="/" 
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded-lg transition-colors ${
                      isActive ? 'bg-[#7C3AED]/20 text-[#06B6D4]' : 'text-[#F1F5F9] hover:bg-[#1E293B]'
                    }`
                  }
                >
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded-lg transition-colors ${
                      isActive ? 'bg-[#7C3AED]/20 text-[#06B6D4]' : 'text-[#F1F5F9] hover:bg-[#1E293B]'
                    }`
                  }
                >
                  À propos
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/projects" 
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded-lg transition-colors ${
                      isActive ? 'bg-[#7C3AED]/20 text-[#06B6D4]' : 'text-[#F1F5F9] hover:bg-[#1E293B]'
                    }`
                  }
                >
                  Projets
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded-lg transition-colors ${
                      isActive ? 'bg-[#7C3AED]/20 text-[#06B6D4]' : 'text-[#F1F5F9] hover:bg-[#1E293B]'
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;