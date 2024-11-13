import React from 'react';
import { Filter } from 'lucide-react';

interface ProductSidebarProps {
  filters: {
    category: string;
    priceRange: [number, number];
    searchQuery: string;
  };
  onFilterChange: (filters: any) => void;
  categories: string[];
}

export default function ProductSidebar({ filters, onFilterChange, categories }: ProductSidebarProps) {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-900">Filters</h2>
          <Filter className="w-5 h-5 text-gray-500" />
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Categories</h3>
            <div className="space-y-2">
              <button
                onClick={() => onFilterChange({ ...filters, category: '' })}
                className={`block text-sm ${!filters.category ? 'text-pink-600 font-medium' : 'text-gray-600'}`}
              >
                All Products
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => onFilterChange({ ...filters, category })}
                  className={`block text-sm ${filters.category === category ? 'text-pink-600 font-medium' : 'text-gray-600'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Price Range</h3>
            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max="200"
                value={filters.priceRange[1]}
                onChange={(e) => onFilterChange({
                  ...filters,
                  priceRange: [0, parseInt(e.target.value)]
                })}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>$0</span>
                <span>Up to ${filters.priceRange[1]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}