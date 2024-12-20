import React from 'react';
import { GraduationCap, MapPin, Calendar, ExternalLink } from 'lucide-react';
import type { Education } from '../../types/education';

interface EducationItemProps {
  education: Education;
}

export function EducationItem({ education }: EducationItemProps) {
  return (
    <div className="flex gap-6">
      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
        <GraduationCap className="w-6 h-6 text-gray-600" />
      </div>
      <div className="flex-1">
        <div className="bg-white p-6 rounded-lg border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{education.degree}</h3>
          <p className="text-gray-600 mb-1">
            <a
              href={education.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-600 transition-colors inline-flex items-center gap-1"
            >
              {education.institution}
              <ExternalLink className="w-3 h-3" />
            </a>
          </p>
          <p className="text-gray-600 mb-1 flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {education.period}
          </p>
          <p className="text-gray-600 mb-4 flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {education.location}
          </p>
          <p className="text-gray-600">{education.description}</p>
        </div>
      </div>
    </div>
  );
}