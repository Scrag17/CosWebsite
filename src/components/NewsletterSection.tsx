import React from 'react';
import { Mail } from 'lucide-react';

export default function NewsletterSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-gray-900">Stay Updated</h2>
          <p className="mt-4 text-lg text-gray-500">
            Subscribe to our newsletter for exclusive offers and beauty tips
          </p>
        </div>
        <form className="mt-8 sm:flex justify-center max-w-md mx-auto">
          <div className="min-w-0 flex-1">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
            />
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <button
              type="submit"
              className="block w-full px-4 py-3 rounded-md border border-transparent text-white bg-pink-600 hover:bg-pink-700 focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:text-sm"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}