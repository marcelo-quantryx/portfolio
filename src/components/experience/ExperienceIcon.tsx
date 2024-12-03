import React from 'react';
import { Database, ShoppingCart, Code, Building2, BarChart } from 'lucide-react';

interface ExperienceIconProps {
  company: string;
}

export function ExperienceIcon({ company }: ExperienceIconProps) {
  switch (company) {
    case 'Xiatech Consulting Ltd':
      return <Database className="w-6 h-6 text-gray-600" />;
    case 'I Saw It First':
      return <ShoppingCart className="w-6 h-6 text-gray-600" />;
    case 'Freelance Data Engineer':
      return <Code className="w-6 h-6 text-gray-600" />;
    case 'SMBC':
      return <Building2 className="w-6 h-6 text-gray-600" />;
    case 'Banco Itau BBA':
      return <BarChart className="w-6 h-6 text-gray-600" />;
    default:
      return <Code className="w-6 h-6 text-gray-600" />;
  }
}