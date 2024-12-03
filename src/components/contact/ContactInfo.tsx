import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { ContactInfo as ContactInfoType } from '../../types/contact';

interface ContactInfoProps {
  info: ContactInfoType;
}

export function ContactInfo({ info }: ContactInfoProps) {
  return (
    <div>
      <p className="text-lg text-gray-600 mb-8">
        I'm always interested in hearing about new projects and opportunities.
        Feel free to reach out if you'd like to connect!
      </p>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Mail className="w-5 h-5 text-gray-600" />
          <span className="text-gray-600">{info.email}</span>
        </div>
        <div className="flex items-center gap-4">
          <Phone className="w-5 h-5 text-gray-600" />
          <span className="text-gray-600">{info.phone}</span>
        </div>
        <div className="flex items-center gap-4">
          <MapPin className="w-5 h-5 text-gray-600" />
          <span className="text-gray-600">{info.location}</span>
        </div>
      </div>
    </div>
  );
}