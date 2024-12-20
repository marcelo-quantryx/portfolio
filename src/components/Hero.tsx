import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="about" className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Senior Data Engineer
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600">
                Empowering Your Data Journey
              </p>
            </div>
            <p className="text-lg text-gray-600 mt-8 mb-8">
              Skilled data engineer specializing in designing and building scalable data pipelines
              and processing systems. Expert in Python, SQL, and Cloud Services, with a proven track
              record of delivering high-quality solutions that drive data-driven decision-making.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Let's talk
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="flex-1">
            <img
              src="images/me.jpeg"
              alt="Profile"
              className="w-64 h-64 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}