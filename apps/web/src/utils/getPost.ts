import { posts } from "@/content";

export function getPost(slug: string) {
  const post = posts.find((post) => post.meta.slug === slug);

  if (!post) {
    throw new Error(`Post not found: ${slug}`);
  }

  return post;
}

export function getPosts() {
  return posts;
}
