import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const processedContent = content
    .replace(/^### (.*$)/gm, '<h3 class="text-2xl font-bold mt-8 mb-4">$1</h3>')
    .replace(/^## (.*$)/gm, '<h2 class="text-3xl font-bold mt-12 mb-6">$1</h2>')
    .replace(/^# (.*$)/gm, '<h1 class="text-4xl font-bold mt-16 mb-8">$1</h1>')
    .replace(/```([^`]+)```/g, '<pre class="bg-gray-50 p-4 rounded-lg overflow-x-auto my-4"><code>$1</code></pre>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n\n/g, '</p><p class="my-4">');

  return (
    <div 
      className="markdown"
      dangerouslySetInnerHTML={{ __html: `<p>${processedContent}</p>` }} 
    />
  );
}