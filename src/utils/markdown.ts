export async function getMarkdownContent(slug: string): Promise<string | null> {
  try {
    const { blogContents } = await import('../content/blog/posts');
    return blogContents[slug]?.content || null;
  } catch (error) {
    console.error(`Error loading blog content: ${error}`);
    return null;
  }
}