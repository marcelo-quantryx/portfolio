import React from 'react';
import { ReferralCard } from './referrals/ReferralCard';
import { ReferralForm } from './referrals/ReferralForm';
import { referrals } from '../data/referrals';

export function Referrals() {
  return (
    <section id="referrals" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Referrals</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-8">
              {referrals.map((referral) => (
                <ReferralCard key={referral.name} referral={referral} />
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <ReferralForm />
          </div>
        </div>
      </div>
    </section>
  );
}