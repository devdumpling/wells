import { NextResponse } from "next/server";
import { Octokit } from "octokit";

export async function GET() {
  const octokit = new Octokit();
  const { data } = await octokit.rest.repos.getContent({
    owner: "devdumpling",
    repo: "writing",
    path: "blog/content",
  });

  console.log(data);

  // data comes back as an array of objects that look like this
  //   {
  //      name: 'momentum.md',
  //      path: 'blog/content/momentum.md',
  //      sha: '470f3b646205d5deb1e5928b66264c8d312a7d14',
  //      size: 9704,
  //      url: 'https://api.github.com/repos/devdumpling/writing/contents/blog/content/momentum.md?ref=main',
  //      html_url: 'https://github.com/devdumpling/writing/blob/main/blog/content/momentum.md',
  //      git_url: 'https://api.github.com/repos/devdumpling/writing/git/blobs/470f3b646205d5deb1e5928b66264c8d312a7d14',
  //      download_url: 'https://raw.githubusercontent.com/devdumpling/writing/main/blog/content/momentum.md',
  //      type: 'file',
  //      _links: {
  //        self: 'https://api.github.com/repos/devdumpling/writing/contents/blog/content/momentum.md?ref=main',
  //        git: 'https://api.github.com/repos/devdumpling/writing/git/blobs/470f3b646205d5deb1e5928b66264c8d312a7d14',
  //        html: 'https://github.com/devdumpling/writing/blob/main/blog/content/momentum.md'
  //      }
  //  }

  return NextResponse.json(data);
}
