import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import WishlistButton from './WishlistButton';

interface NavbarProps {
  cartItemsCount: number;
  wishlistCount: number;
  onCartClick: () => void;
  onWishlistClick: () => void;
}

export default function Navbar({ cartItemsCount, wishlistCount, onCartClick, onWishlistClick }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-serif text-gray-900">LUXE</Link>
            <div className="space-x-8">
              <Link to="/products" className="text-gray-600 hover:text-gray-900">Products</Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900">About Us</Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <WishlistButton count={wishlistCount} onClick={onWishlistClick} />
            <button 
              onClick={onCartClick}
              className="p-2 hover:bg-gray-100 rounded-full relative"
            >
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}