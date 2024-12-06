import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { FreelanceProject } from '../../types/experience';
import { TechBadge } from './TechBadge';

interface FreelanceProjectsProps {
  projects: FreelanceProject[];
}

export function FreelanceProjects({ projects }: FreelanceProjectsProps) {
  return (
    <div className="mt-6">
      <h4 className="font-semibold text-gray-900 mb-4">Notable Projects</h4>
      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.company} className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-600 transition-colors inline-flex items-center gap-1"
              >
                {project.company}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-sm text-gray-600 mb-2">{project.period}</p>
            <p className="text-gray-600 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}