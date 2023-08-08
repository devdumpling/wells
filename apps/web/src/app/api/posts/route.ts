import { NextResponse } from "next/server";
import { Octokit } from "octokit";
import matter from "gray-matter";

export async function GET() {
  const octokit = new Octokit();
  const { data } = await octokit.rest.repos.getContent({
    owner: "devdumpling",
    repo: "writing",
    path: "blog/content",
  });

  const posts = await Promise.all(
    data.map(async (post: any) => {
      const { data: content } = await octokit.request(post.url);
      const { data: file } = await octokit.request(content.download_url);
      const { data: frontmatter, content: markdownContent } = matter(file);

      console.log(frontmatter);
      return {
        frontmatter,
        markdownContent,
      };
    })
  );

  console.log(posts);

  return NextResponse.json(posts);
}
