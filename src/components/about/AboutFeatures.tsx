import React from 'react';
import { Shield, Heart, Users, Sparkles } from 'lucide-react';

export default function AboutFeatures() {
  const features = [
    {
      title: "Quality Assurance",
      description: "Every product is authenticated and quality-checked",
      icon: Shield,
    },
    {
      title: "Customer-Centric",
      description: "Dedicated support team for personalized service",
      icon: Heart,
    },
    {
      title: "Community Focus",
      description: "Supporting local beauty communities",
      icon: Users,
    },
    {
      title: "Innovation",
      description: "Constantly expanding our product range",
      icon: Sparkles,
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-gray-900">Our Commitment</h2>
          <p className="mt-4 text-lg text-gray-500">
            What sets us apart in the beauty industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}