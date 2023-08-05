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

  return NextResponse.json(data);
}
