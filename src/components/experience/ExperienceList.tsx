import React from 'react';
import { ExperienceItem } from './ExperienceItem';
import type { Experience } from '../../types/experience';

interface ExperienceListProps {
  experiences: Experience[];
}

export function ExperienceList({ experiences }: ExperienceListProps) {
  return (
    <div className="relative">
      {experiences.map((experience, index) => (
        <ExperienceItem
          key={`${experience.name}-${experience.period}`}
          experience={experience}
          isLast={index === experiences.length - 1}
        />
      ))}
    </div>
  );
}