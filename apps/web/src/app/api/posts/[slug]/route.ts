import { NextResponse } from "next/server";
import { Octokit } from "octokit";
import matter from "gray-matter";

import type { Post } from "../types";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
): Promise<NextResponse> {
  const octokit: Octokit = new Octokit();
  const slug = params.slug;
  const { data }: any = await octokit.rest.repos.getContent({
    owner: "devdumpling",
    repo: "writing",
    path: `blog/content/${slug}.md`,
  });

  const { data: content }: any = await octokit.request(data.url);
  const { data: file }: any = await octokit.request(content.download_url);
  const { data: frontmatter, content: markdownContent }: any = matter(file);

  const post: Post = {
    frontmatter,
    markdownContent,
  };

  return NextResponse.json(post);
}
