import React from 'react';
import { BlogPost } from './blog/BlogPost';
import { blogPosts } from '../data/blog';

export function Blog() {
  return (
    <section id="blog" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Posts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}