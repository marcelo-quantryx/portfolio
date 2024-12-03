import React, { useState } from 'react';
import { ExperienceIcon } from './ExperienceIcon';
import { TimelineConnector } from './TimelineConnector';
import { TechBadge } from './TechBadge';
import { ExperienceDetail } from './ExperienceDetail';
import { FreelanceProjects } from './FreelanceProjects';
import { ExternalLink, MapPin, Calendar } from 'lucide-react';
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
          <ExperienceIcon company={experience.name} />
        </div>
        <TimelineConnector isLast={isLast} />
      </div>
      <div className="flex-1 pb-8">
        <div className="bg-white p-6 rounded-lg border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{experience.position}</h3>
          <div className="space-y-1 mb-4">
            <p className="text-gray-600">
              <a
                href={experience.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-600 transition-colors inline-flex items-center gap-1"
              >
                {experience.name}
                <ExternalLink className="w-3 h-3" />
              </a>
              {experience.additionalLinks?.map((link) => (
                <span key={link.url}>
                  {' • '}
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-gray-600 transition-colors inline-flex items-center gap-1"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </span>
              ))}
            </p>
            <p className="text-gray-600 flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {experience.period}
            </p>
            <p className="text-gray-600 flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {experience.location}
            </p>
          </div>
          <p className="text-gray-600 mb-4">{experience.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {experience.technologies.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
          
          {(experience.detailedDescription || experience.achievements) && (
            <ExperienceDetail
              isExpanded={isExpanded}
              onToggle={() => setIsExpanded(!isExpanded)}
              detailedDescription={experience.detailedDescription}
              achievements={experience.achievements}
            />
          )}

          {experience.projects && isExpanded && (
            <FreelanceProjects projects={experience.projects} />
          )}
        </div>
      </div>
    </div>
  );
}