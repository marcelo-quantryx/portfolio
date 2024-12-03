import React from 'react';
import { ExperienceItem } from './experience/ExperienceItem';
import { experiences } from '../data/experience';

export function Experience() {
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={`${experience.name}-${experience.period}`}
              experience={experience}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}