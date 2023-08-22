import { Octokit } from "octokit";
import matter from "gray-matter";

import type { Post } from "@/app/api/posts/types";

// Rebuilds the page every 10 hours
// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
export const revalidate = 36000;

export async function getPosts(): Promise<Post[]> {
  const octokit: Octokit = new Octokit();
  const { data }: any = await octokit.rest.repos.getContent({
    owner: "devdumpling",
    repo: "writing",
    path: "blog/content",
  });

  if (!data) {
    throw new Error("Failed to fetch posts");
  }

  const posts: Post[] = await Promise.all(
    data.map(async (post: any) => {
      const { data: content }: any = await octokit.request(post.url);
      const { data: file }: any = await octokit.request(content.download_url);
      const { data: frontmatter, content: markdownContent }: any = matter(file);

      return {
        frontmatter,
        markdownContent,
      };
    })
  );

  return posts;
}

export async function getPost(slug: string): Promise<Post> {
  const octokit: Octokit = new Octokit();
  const { data }: any = await octokit.rest.repos.getContent({
    owner: "devdumpling",
    repo: "writing",
    path: `blog/content/${slug}.md`,
  });

  if (!data) {
    throw new Error("Failed to fetch post");
  }

  const { data: content }: any = await octokit.request(data.url);
  const { data: file }: any = await octokit.request(content.download_url);
  const { data: frontmatter, content: markdownContent }: any = matter(file);

  const post: Post = {
    frontmatter,
    markdownContent,
  };

  return post;
}
