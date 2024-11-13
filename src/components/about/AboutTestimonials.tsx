import React from 'react';
import { Star } from 'lucide-react';

export default function AboutTestimonials() {
  const testimonials = [
    {
      content: "Working with LUXE has been incredible. Their commitment to quality and customer service is unmatched.",
      author: "Beauty Box SA",
      role: "Partner",
      rating: 5,
    },
    {
      content: "LUXE Cosmetics has transformed how South Africans access premium beauty products.",
      author: "Style Magazine",
      role: "Beauty Editor",
      rating: 5,
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-gray-900">Industry Recognition</h2>
          <p className="mt-4 text-lg text-gray-500">
            What our partners and industry experts say about us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 text-lg italic">{testimonial.content}</p>
              <div>
                <p className="font-medium text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}