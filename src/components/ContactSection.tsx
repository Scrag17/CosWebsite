import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-gray-900">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-500">
            We're here to help with any questions or concerns
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <Mail className="h-8 w-8 text-pink-600 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Email</h3>
            <p className="text-gray-500 text-center">support@luxecosmetics.com</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <Phone className="h-8 w-8 text-pink-600 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-500 text-center">+27 (0) 21 123 4567</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <MapPin className="h-8 w-8 text-pink-600 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Location</h3>
            <p className="text-gray-500 text-center">Cape Town, South Africa</p>
          </div>
        </div>
      </div>
    </section>
  );
}