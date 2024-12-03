import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExperienceDetailProps {
  isExpanded: boolean;
  onToggle: () => void;
  achievements: string[];
  detailedDescription: string;
}

export function ExperienceDetail({ isExpanded, onToggle, achievements, detailedDescription }: ExperienceDetailProps) {
  return (
    <div className="mt-4">
      <button
        onClick={onToggle}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
      >
        <span className="text-sm font-medium">
          {isExpanded ? 'Show Less' : 'Show More'}
        </span>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>
      
      {isExpanded && (
        <div className="mt-4 space-y-4">
          <p className="text-gray-600 whitespace-pre-line">{detailedDescription}</p>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Key Achievements</h4>
            <ul className="list-disc list-inside space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-gray-600">{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}