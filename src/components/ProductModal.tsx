import React from 'react';
import { X, ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onAddToWishlist: (product: Product) => void;
  isInWishlist: boolean;
}

export default function ProductModal({ product, onClose, onAddToCart, onAddToWishlist, isInWishlist }: ProductModalProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75" onClick={onClose} />

        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
          <div className="absolute right-4 top-4">
            <button onClick={onClose} className="rounded-full p-2 hover:bg-gray-100">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-x-6">
            <div className="aspect-square w-full">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="px-6 py-8">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-gray-900">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{product.category}</p>
              </div>

              <p className="text-xl font-medium text-gray-900 mb-4">
                ${product.price}
              </p>

              <p className="text-gray-600 mb-6">
                {product.description}
              </p>

              <div className="flex space-x-4">
                <button
                  onClick={() => onAddToCart(product)}
                  className="flex-1 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
                <button
                  onClick={() => onAddToWishlist(product)}
                  className={`p-3 rounded-lg border ${
                    isInWishlist
                      ? 'bg-pink-50 border-pink-200 text-pink-600'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isInWishlist ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}