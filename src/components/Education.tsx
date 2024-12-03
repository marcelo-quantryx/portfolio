import React from 'react';
import { EducationItem } from './education/EducationItem';
import { LanguageList } from './education/LanguageList';
import type { Education, Language } from '../types/education';

export function Education() {
  const education: Education = {
    institution: "University Centre of FEI",
    location: "São Bernardo do Campo, Brazil",
    degree: "Bachelor of Science Production Engineering",
    period: "February 2009 - June 2015",
    description: "Degree focused on lean manufacturing, industrial planning, programming, automation process, statistical analysis, finance and costs."
  };

  const languages: Language[] = [
    { name: "English", level: "Advanced" },
    { name: "Portuguese", level: "Fluent (Native speaker)" },
    { name: "Spanish", level: "Intermediate" }
  ];

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