/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// Content Collections
interface BlogFrontmatter {
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  tags: string[];
  heroImage?: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'web' | 'ai' | 'devops';
  liveUrl?: string;
  repoUrl?: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}