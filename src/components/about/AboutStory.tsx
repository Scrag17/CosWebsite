import React from 'react';

export default function AboutStory() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800"
              alt="Our journey"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif text-gray-900 mb-6">Our Journey</h2>
            <div className="prose prose-lg">
              <p>
                Founded in 2020, LUXE Cosmetics began with a simple mission: to make premium beauty products accessible to all South African beauty enthusiasts.
              </p>
              <p>
                What started as a small online store has grown into a trusted destination for authentic, high-quality cosmetics. We've built strong relationships with international brands and local communities, ensuring our customers receive only the best products.
              </p>
              <p>
                Our commitment to quality, authenticity, and customer satisfaction has made us a leading name in South Africa's beauty industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}