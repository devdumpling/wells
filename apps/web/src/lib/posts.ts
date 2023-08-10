import type { Post } from "@/app/api/posts/types";

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${process.env.BASE_URL}/api/posts`);

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export async function getPost(slug: string): Promise<Post> {
  const res = await fetch(`${process.env.BASE_URL}/api/posts/${slug}`);

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  return res.json();
}
