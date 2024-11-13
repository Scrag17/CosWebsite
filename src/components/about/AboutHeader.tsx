import React from 'react';

export default function AboutHeader() {
  return (
    <section className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-gray-900 sm:text-5xl">
            Our Story
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Dedicated to bringing premium beauty products to South African customers, making luxury cosmetics accessible to everyone.
          </p>
        </div>
      </div>
    </section>
  );
}