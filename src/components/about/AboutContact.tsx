import React from 'react';
import { Mail, MapPin } from 'lucide-react';

export default function AboutContact() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-serif text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-500 mb-8">
              Interested in partnering with us or have questions about our products? We'd love to hear from you.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-pink-600 mr-3" />
                <span className="text-gray-600">partnerships@luxecosmetics.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-pink-600 mr-3" />
                <span className="text-gray-600">Cape Town, South Africa</span>
              </div>
            </div>
          </div>
          <div>
            <form className="bg-gray-50 p-8 rounded-lg">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}