import React from 'react';
import { Briefcase } from 'lucide-react';
import type { Experience } from '../../types/experience';
import { TechTag } from './TechTag';

interface TimelineItemProps {
  experience: Experience;
  isLast: boolean;
}

export function TimelineItem({ experience, isLast }: TimelineItemProps) {
  return (
    <div className="flex gap-6">
      <div className="relative flex flex-col items-center">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center z-10">
          <Briefcase className="w-6 h-6 text-gray-600" />
        </div>
        {!isLast && (
          <div className="w-0.5 h-full bg-gray-200 absolute top-12" />
        )}
      </div>
      <div className="flex-1 pb-8">
        <div className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold text-gray-900">{experience.position}</h3>
          <p className="text-gray-600 mb-2">{experience.company} • {experience.period}</p>
          <p className="text-gray-600 mb-4">{experience.description}</p>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <TechTag key={tech} name={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}