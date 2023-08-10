export interface FrontMatter {
  title: string;
  description: string;
  date: string;
  slug: string;
}

export interface Post {
  frontmatter: FrontMatter;
  markdownContent: string;
}
