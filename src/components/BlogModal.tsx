import React from 'react';
import { X, Calendar, Clock } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export default function BlogModal({ post, onClose }: BlogModalProps) {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75" onClick={onClose} />

        <div className="relative bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
          <div className="absolute right-4 top-4 z-10">
            <button 
              onClick={onClose}
              className="rounded-full p-2 bg-white/80 hover:bg-white shadow-sm"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div>
            <div className="aspect-[21/9] relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="px-8 py-6">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-sm font-medium px-3 py-1 bg-pink-50 text-pink-600 rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readTime}
                </div>
              </div>

              <h1 className="text-3xl font-semibold text-gray-900 mb-4">
                {post.title}
              </h1>

              <div className="flex items-center justify-between mb-6 pb-6 border-b">
                <div className="flex items-center">
                  <div className="mr-3">
                    <div className="font-medium text-gray-900">{post.author}</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                {post.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}