import React from 'react';
import { BlogPost } from './blog/BlogPost';
import type { BlogPost as BlogPostType } from '../types/blog';

export function Blog() {
  const posts: BlogPostType[] = [
    {
      title: "Building Scalable Data Pipelines with Apache Airflow",
      date: "March 15, 2024",
      excerpt: "Learn how to design and implement robust data pipelines using Apache Airflow, with best practices for scalability and maintenance.",
      readTime: "8 min read",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      tags: ["Data Engineering", "Apache Airflow", "Python"]
    },
    {
      title: "Real-time Data Processing with Google Cloud PubSub",
      date: "March 1, 2024",
      excerpt: "Explore the implementation of real-time data streaming solutions using Google Cloud PubSub and Cloud Functions.",
      readTime: "6 min read",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      tags: ["Google Cloud", "Data Streaming", "Cloud Functions"]
    },
    {
      title: "Optimizing BigQuery Performance",
      date: "February 15, 2024",
      excerpt: "Deep dive into optimization techniques for Google BigQuery, including partitioning, clustering, and query optimization.",
      readTime: "10 min read",
      imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0",
      tags: ["BigQuery", "Performance", "Data Warehouse"]
    }
  ];

  return (
    <section id="blog" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Posts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogPost key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}