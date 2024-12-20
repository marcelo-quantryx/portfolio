import React, { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { Link } from './common/Link';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-900" category="header">
            Marcelo Ribeiro
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-gray-900"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/#experience" className="text-gray-600 hover:text-gray-900" category="header">Experience</Link>
            <Link href="/#education" className="text-gray-600 hover:text-gray-900" category="header">Education</Link>
            <Link href="/#blog" className="text-gray-600 hover:text-gray-900" category="header">Blog</Link>
            <Link href="/#projects" className="text-gray-600 hover:text-gray-900" category="header">Projects</Link>
            <Link href="/#referrals" className="text-gray-600 hover:text-gray-900" category="header">Referrals</Link>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/marcelo-quantryx/portfolio" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-gray-900"
                onClick={() => window.dataLayer?.push({
                  event: 'social_click',
                  eventCategory: 'social',
                  eventAction: 'click',
                  eventLabel: 'github'
                })}
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/marcelogazzola" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-gray-900"
                onClick={() => window.dataLayer?.push({
                  event: 'social_click',
                  eventCategory: 'social',
                  eventAction: 'click',
                  eventLabel: 'linkedin'
                })}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:marcelo@quantryx.com" 
                className="text-gray-600 hover:text-gray-900"
                onClick={() => window.dataLayer?.push({
                  event: 'social_click',
                  eventCategory: 'social',
                  eventAction: 'click',
                  eventLabel: 'email'
                })}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col gap-4">
              <Link 
                href="/#experience" 
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
                category="header_mobile"
              >
                Experience
              </Link>
              <Link 
                href="/#education" 
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
                category="header_mobile"
              >
                Education
              </Link>
              <Link 
                href="/#blog" 
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
                category="header_mobile"
              >
                Blog
              </Link>
              <Link 
                href="/#projects" 
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
                category="header_mobile"
              >
                Projects
              </Link>
              <Link 
                href="/#referrals" 
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
                category="header_mobile"
              >
                Referrals
              </Link>
              <div className="flex gap-4 pt-2">
                <a 
                  href="https://github.com/marcelo-quantryx/portfolio" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-gray-900"
                  onClick={() => window.dataLayer?.push({
                    event: 'social_click',
                    eventCategory: 'social_mobile',
                    eventAction: 'click',
                    eventLabel: 'github'
                  })}
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/marcelogazzola" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-gray-900"
                  onClick={() => window.dataLayer?.push({
                    event: 'social_click',
                    eventCategory: 'social_mobile',
                    eventAction: 'click',
                    eventLabel: 'linkedin'
                  })}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:marcelo@quantryx.com" 
                  className="text-gray-600 hover:text-gray-900"
                  onClick={() => window.dataLayer?.push({
                    event: 'social_click',
                    eventCategory: 'social_mobile',
                    eventAction: 'click',
                    eventLabel: 'email'
                  })}
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}