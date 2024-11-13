import React, { useState } from 'react';
import { blogPosts } from '../data/blog';
import BlogCard from './BlogCard';
import BlogModal from './BlogModal';
import type { BlogPost } from '../types';

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif text-gray-900 mb-4">Beauty Blog</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Discover expert tips, in-depth guides, and the latest trends in beauty and skincare.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.id}
            post={post}
            onClick={() => setSelectedPost(post)}
          />
        ))}
      </div>

      <BlogModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
      />
    </section>
  );
}