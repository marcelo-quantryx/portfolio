import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">© 2024 Quantryx Ltd. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com" className="text-gray-400 hover:text-white">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:john@example.com" className="text-gray-400 hover:text-white">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}