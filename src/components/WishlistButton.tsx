import React from 'react';
import { Heart } from 'lucide-react';

interface WishlistButtonProps {
  count: number;
  onClick: () => void;
}

export default function WishlistButton({ count, onClick }: WishlistButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="p-2 hover:bg-gray-100 rounded-full relative"
    >
      <Heart className="w-6 h-6 text-gray-600" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {count}
        </span>
      )}
    </button>
  );
}