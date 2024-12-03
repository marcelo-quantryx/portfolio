import React from 'react';
import { ContactForm } from './contact/ContactForm';
import { ContactInfo } from './contact/ContactInfo';
import { CalendarEmbed } from './contact/CalendarEmbed';
import type { ContactInfo as ContactInfoType } from '../types/contact';

const contactInfo: ContactInfoType = {
  email: 'marcelo@quantryx.com',
  phone: '+34 627 385 408',
  location: 'Seville, ES'
};

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-12">
            <ContactInfo info={contactInfo} />
            <ContactForm />
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Schedule a Meeting</h3>
            <CalendarEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}