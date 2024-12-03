import React, { useState } from 'react';
import { ExperienceIcon } from './ExperienceIcon';
import { TimelineConnector } from './TimelineConnector';
import { TechBadge } from './TechBadge';
import { ExperienceDetail } from './ExperienceDetail';
import type { Experience } from '../../types/experience';

interface ExperienceItemProps {
  experience: Experience;
  isLast: boolean;
}

export function ExperienceItem({ experience, isLast }: ExperienceItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex gap-6">
      <div className="relative flex flex-col items-center">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center z-10">
          <ExperienceIcon company={experience.company} />
        </div>
        <TimelineConnector isLast={isLast} />
      </div>
      <div className="flex-1 pb-8">
        <div className="bg-white p-6 rounded-lg border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900">{experience.position}</h3>
          <p className="text-gray-600 mb-2">
            {experience.company} • {experience.location} • {experience.period}
          </p>
          <p className="text-gray-600 mb-4">{experience.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {experience.technologies.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
          
          {experience.detailedDescription && experience.achievements && (
            <ExperienceDetail
              isExpanded={isExpanded}
              onToggle={() => setIsExpanded(!isExpanded)}
              detailedDescription={experience.detailedDescription}
              achievements={experience.achievements}
            />
          )}
        </div>
      </div>
    </div>
  );
}