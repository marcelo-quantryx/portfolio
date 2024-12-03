export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  imageUrl: string;
  tags: string[];
  slug: string;
}

export interface BlogContent {
  content: string;
}