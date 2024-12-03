import React from 'react';
import { Languages } from 'lucide-react';
import type { Language } from '../../types/education';

interface LanguageListProps {
  languages: Language[];
}

const getLanguageEmoji = (name: string): string => {
  switch (name.toLowerCase()) {
    case 'portuguese':
      return '🇧🇷';
    case 'english':
      return '🇬🇧';
    case 'spanish':
      return '🇪🇸';
    default:
      return '';
  }
};

export function LanguageList({ languages }: LanguageListProps) {
  return (
    <div className="flex gap-6">
      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
        <Languages className="w-6 h-6 text-gray-600" />
      </div>
      <div className="flex-1">
        <div className="bg-white p-6 rounded-lg border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Languages</h3>
          <ul className="space-y-2">
            {languages.map((language) => (
              <li key={language.name} className="flex items-center gap-2">
                <span className="text-xl" role="img" aria-label={`${language.name} flag`}>
                  {getLanguageEmoji(language.name)}
                </span>
                <span className="font-medium text-gray-900">{language.name}</span>
                <span className="text-gray-600">- {language.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}