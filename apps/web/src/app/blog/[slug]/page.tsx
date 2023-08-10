import { getPost, getPosts } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  const { frontmatter, markdownContent } = post;

  return (
    <section>
      <h1 className="my-8 text-4xl font-bold">{frontmatter.title}</h1>
      <MDXRemote source={markdownContent} />
    </section>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(({ frontmatter }) => ({
    slug: frontmatter.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  const { frontmatter } = post;

  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}
