import React from 'react';
import { Filters as FiltersType } from '../types';

interface FiltersProps {
  filters: FiltersType;
  onFilterChange: (filters: FiltersType) => void;
  categories: string[];
}

export default function FiltersComponent({ filters, onFilterChange, categories }: FiltersProps) {
  return (
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
        <div className="flex items-center space-x-4">
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
          <span className="text-sm text-gray-600">
            Up to ${filters.priceRange[1]}
          </span>
        </div>
      </div>
    </div>
  );
}