import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check } from 'lucide-react';

interface MarkdownRendererProps {
  content: string;
}

interface CodeBlockProps {
  code: string;
  language: string;
}

function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 p-2 rounded bg-gray-800 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"
        title="Copy code"
      >
        {copied ? (
          <Check className="w-4 h-4" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </button>
      <SyntaxHighlighter
        language={language}
        style={tomorrow}
        customStyle={{
          borderRadius: '0.5rem',
          padding: '1rem',
          margin: 0,
          fontFamily: '"Roboto Mono", "DejaVu Sans Mono", "Consolas", monospace'
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const processContent = (markdown: string) => {
    let processedContent = markdown;
    const codeBlocks: Array<{ lang: string; code: string }> = [];

    // Extract code blocks and replace with placeholders
    processedContent = processedContent.replace(/```(\w+)?\n([\s\S]*?)```/g, (_, lang, code) => {
      const index = codeBlocks.length;
      codeBlocks.push({ lang: lang || 'text', code: code.trim() });
      return `__CODE_BLOCK_${index}__`;
    });

    // Process other markdown elements
    processedContent = processedContent
      .replace(/^### (.*$)/gm, '<h3 class="text-2xl font-bold mt-8 mb-4">$1</h3>')
      .replace(/^## (.*$)/gm, '<h2 class="text-3xl font-bold mt-12 mb-6">$1</h2>')
      .replace(/^# (.*$)/gm, '<h1 class="text-4xl font-bold mt-16 mb-8">$1</h1>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n\n/g, '</p><p class="my-4">');

    // Restore code blocks with syntax highlighting
    const elements = processedContent.split('__CODE_BLOCK_').map((part, index) => {
      if (index === 0) {
        return <div key={index} dangerouslySetInnerHTML={{ __html: `<p>${part}</p>` }} />;
      }

      const [blockIndex, ...rest] = part.split('__');
      const block = codeBlocks[parseInt(blockIndex)];
      const remainingContent = rest.join('__');

      return (
        <React.Fragment key={index}>
          <div className="my-6">
            <CodeBlock code={block.code} language={block.lang} />
          </div>
          {remainingContent && (
            <div dangerouslySetInnerHTML={{ __html: `<p>${remainingContent}</p>` }} />
          )}
        </React.Fragment>
      );
    });

    return elements;
  };

  return (
    <div className="markdown prose prose-lg max-w-none">
      {processContent(content)}
    </div>
  );
}