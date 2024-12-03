import React from 'react';
import { EducationItem } from './education/EducationItem';
import { LanguageList } from './education/LanguageList';
import { education, languages } from '../data/education';

export function Education() {
  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
        <div className="space-y-12">
          <EducationItem education={education} />
          <LanguageList languages={languages} />
        </div>
      </div>
    </section>
  );
}