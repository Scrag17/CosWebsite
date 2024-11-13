import React from 'react';
import { Star, Heart, ShoppingBag } from 'lucide-react';

export default function FeatureSection() {
  const features = [
    {
      name: 'Affordable Prices',
      description: 'Premium beauty products at competitive prices',
      icon: ShoppingBag,
    },
    {
      name: 'High-Quality Imports',
      description: 'Authentic products from renowned international brands',
      icon: Star,
    },
    {
      name: 'Wide Range of Products',
      description: 'Everything you need for your beauty routine',
      icon: Heart,
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-serif text-gray-900">Why Choose Us</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Experience the difference with our premium beauty products and exceptional service.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-pink-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}