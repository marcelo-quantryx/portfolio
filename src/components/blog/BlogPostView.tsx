import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from '../common/Link';
import { blogPosts } from '../../data/blog';
import { MarkdownRenderer } from './MarkdownRenderer';
import { getMarkdownContent } from '../../utils/markdown';

interface BlogPostViewProps {
  slug: string;
}

export function BlogPostView({ slug }: BlogPostViewProps) {
  const [content, setContent] = useState<string | null>(null);
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    async function loadContent() {
      if (post) {
        const markdownContent = await getMarkdownContent(post.slug);
        setContent(markdownContent);
      }
    }
    loadContent();
  }, [post]);

  if (!post) {
    return (
      <div className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl font-bold text-gray-900">Post not found</h1>
        </div>
      </div>
    );
  }

  return (
    <article className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to blog
        </Link>
        
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-600">
            <time>{post.date}</time>
            <span>{post.readTime}</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          {content && <MarkdownRenderer content={content} />}
        </div>
      </div>
    </article>
  );
}