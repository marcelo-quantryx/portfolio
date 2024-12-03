import React from 'react';
import { TimelineItem } from './TimelineItem';
import type { Experience } from '../../types/experience';

interface ExperienceListProps {
  experiences: Experience[];
}

export function ExperienceList({ experiences }: ExperienceListProps) {
  return (
    <div className="relative">
      {experiences.map((experience, index) => (
        <TimelineItem
          key={`${experience.company}-${experience.period}`}
          experience={experience}
          isLast={index === experiences.length - 1}
        />
      ))}
    </div>
  );
}