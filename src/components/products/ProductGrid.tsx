import React from 'react';
import { Product } from '../../types';
import { Heart } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onAddToWishlist: (product: Product) => void;
  wishlist: Product[];
}

export default function ProductGrid({ products, onAddToCart, onAddToWishlist, wishlist }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => {
        const isWishlisted = wishlist.some(item => item.id === product.id);
        
        return (
          <div key={product.id} className="group relative">
            <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
              />
              <button
                onClick={() => onAddToWishlist(product)}
                className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-pink-600 text-pink-600' : 'text-gray-600'}`} />
              </button>
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700 font-medium">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{product.category}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">${product.price}</p>
            </div>
            <button
              onClick={() => onAddToCart(product)}
              className="mt-4 w-full bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}