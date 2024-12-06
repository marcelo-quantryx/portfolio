import React from 'react';
import { Construction } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h2>
        <div className="bg-white p-8 rounded-lg border border-gray-100 text-center">
          <Construction className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Under Construction</h3>
          <p className="text-gray-600">
            We're working on showcasing some exciting projects. Check back soon to see featured work!
          </p>
        </div>
      </div>
    </section>
  );
}