import React from 'react';
import { ContactForm } from './contact/ContactForm';
import { ContactInfo } from './contact/ContactInfo';
import type { ContactInfo as ContactInfoType } from '../types/contact';

const contactInfo: ContactInfoType = {
  email: 'john@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA'
};

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo info={contactInfo} />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}