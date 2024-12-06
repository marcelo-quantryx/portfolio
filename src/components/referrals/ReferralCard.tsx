import React from 'react';
import { Linkedin, Quote } from 'lucide-react';
import type { Referral } from '../../types/referral';

interface ReferralCardProps {
  referral: Referral;
}

export function ReferralCard({ referral }: ReferralCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4 mb-4">
        <img
          src={referral.image}
          alt={referral.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{referral.name}</h3>
          <p className="text-gray-600">{referral.position}</p>
          <p className="text-gray-600">{referral.company}</p>
        </div>
        {referral.linkedin && (
          <a
            href={referral.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-gray-400 hover:text-gray-600"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        )}
      </div>
      <div className="relative">
        <Quote className="w-5 h-5 text-gray-200 absolute -top-2 -left-1" />
        <p className="text-gray-600 italic pl-4 text-sm">{referral.testimonial}</p>
      </div>
    </div>
  );
}