import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">John Doe</h1>
          <nav className="flex items-center gap-6">
            <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
            <a href="#education" className="text-gray-600 hover:text-gray-900">Education</a>
            <a href="#blog" className="text-gray-600 hover:text-gray-900">Blog</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
            <div className="flex items-center gap-4">
              <a href="https://github.com" className="text-gray-600 hover:text-gray-900">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:john@example.com" className="text-gray-600 hover:text-gray-900">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}