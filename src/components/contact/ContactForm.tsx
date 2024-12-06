import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import type { ContactFormData } from '../../types/contact';

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    emailjs.init('tGyMQV2q1k6zagRHy');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'quantryx',
        'template_6udt6af',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Marcelo',
          to_email: 'marcelo@quantryx.com'
        }
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={status === 'sending'}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={status === 'sending'}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          disabled={status === 'sending'}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
        ></textarea>
      </div>
      <div>
        {status === 'success' && (
          <p className="text-green-600 text-sm mb-4">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 text-sm mb-4">Failed to send message. Please try again.</p>
        )}
        <button
          type="submit"
          disabled={status === 'sending'}
          className={`w-full bg-gray-900 text-white px-6 py-3 rounded-lg transition-colors ${
            status === 'sending'
              ? 'opacity-75 cursor-not-allowed'
              : 'hover:bg-gray-800'
          }`}
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}