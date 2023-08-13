export interface FrontMatter {
  title: string;
  description: string;
  date: string;
  slug: string;
  imgAboveFold?: string;
}

export interface Post {
  frontmatter: FrontMatter;
  markdownContent: string;
}
