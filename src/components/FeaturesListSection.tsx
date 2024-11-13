import React from 'react';
import { Truck, Shield, Award } from 'lucide-react';

export default function FeaturesListSection() {
  const benefits = [
    {
      title: 'Free Delivery on Orders Over R500',
      description: 'Enjoy complimentary shipping on all qualifying orders',
      icon: Truck,
    },
    {
      title: '100% Authentic Products',
      description: 'All our products are genuine and sourced directly from authorized distributors',
      icon: Award,
    },
    {
      title: 'Secure Online Shopping',
      description: 'Shop with confidence using our encrypted payment system',
      icon: Shield,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-gray-900">Shopping Benefits</h2>
          <p className="mt-4 text-lg text-gray-500">
            Experience premium service with every purchase
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="relative p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-500">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}