import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export function ReferralForm() {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    company: '',
    testimonial: '',
    linkedin: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'quantryx',
        'template_6udt6af',
        {
          from_name: formData.name,
          from_position: formData.position,
          from_company: formData.company,
          message: formData.testimonial,
          linkedin: formData.linkedin,
          to_email: 'marcelo@quantryx.com',
          subject: 'New Referral Submission'
        }
      );

      setStatus('success');
      setFormData({
        name: '',
        position: '',
        company: '',
        testimonial: '',
        linkedin: ''
      });
    } catch (error) {
      console.error('Failed to send referral:', error);
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
    <div className="bg-white p-6 rounded-lg border border-gray-100">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Submit a Referral</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
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
          <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
            Position
          </label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
            disabled={status === 'sending'}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            disabled={status === 'sending'}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
            LinkedIn Profile URL (optional)
          </label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            disabled={status === 'sending'}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-1">
            Testimonial
          </label>
          <textarea
            id="testimonial"
            name="testimonial"
            rows={4}
            value={formData.testimonial}
            onChange={handleChange}
            required
            disabled={status === 'sending'}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          ></textarea>
        </div>
        {status === 'success' && (
          <p className="text-green-600 text-sm">Thank you for your referral! It will be reviewed and published soon.</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 text-sm">Failed to submit referral. Please try again.</p>
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
          {status === 'sending' ? 'Submitting...' : 'Submit Referral'}
        </button>
      </form>
    </div>
  );
}