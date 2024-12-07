import React from 'react';
import { ExperienceList } from './experience/ExperienceList';
import { experiences } from '../data/experience';

export function Experience() {
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
        <ExperienceList experiences={experiences} />
      </div>
    </section>
  );
}