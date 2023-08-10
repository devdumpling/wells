import { NextResponse } from "next/server";
import { Octokit } from "octokit";
import matter from "gray-matter";

import type { Post } from "./types";

export async function GET(): Promise<NextResponse> {
  const octokit: Octokit = new Octokit();
  const { data }: any = await octokit.rest.repos.getContent({
    owner: "devdumpling",
    repo: "writing",
    path: "blog/content",
  });

  console.log(data);

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

  console.log(posts);

  return NextResponse.json(posts);
}
