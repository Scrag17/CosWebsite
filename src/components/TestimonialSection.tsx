import React from 'react';
import { Star } from 'lucide-react';

export default function TestimonialSection() {
  const testimonials = [
    {
      content: "I'm amazed by the quality of products and the excellent customer service. Will definitely shop here again!",
      author: "Sarah M.",
      role: "Verified Buyer",
      rating: 5,
    },
    {
      content: "The best prices for authentic beauty products in South Africa. Fast delivery and great packaging!",
      author: "Lisa K.",
      role: "Verified Buyer",
      rating: 5,
    },
    {
      content: "Finally found a reliable source for my favorite international brands. Excellent experience!",
      author: "Michelle R.",
      role: "Verified Buyer",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-serif text-gray-900">What Our Customers Say</h2>
          <p className="mt-4 text-lg text-gray-500">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
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