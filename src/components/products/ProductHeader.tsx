import React from 'react';
import { Search } from 'lucide-react';

interface ProductHeaderProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export default function ProductHeader({ searchQuery = '', onSearchChange }: ProductHeaderProps) {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-gray-900 mb-4">Our Products</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            Discover our curated collection of premium beauty products, carefully selected for the South African market.
          </p>
          
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange?.(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}