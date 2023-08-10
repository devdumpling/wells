import { getPost, getPosts } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  const { frontmatter, markdownContent } = post;

  const components = {
    h1: (props: any) => <h1 className="my-4 text-4xl font-bold" {...props} />,
    h2: (props: any) => <h2 className="my-4 text-2xl font-bold" {...props} />,
    h3: (props: any) => <h3 className="my-4 text-xl font-bold" {...props} />,
    p: (props: any) => <p className="my-4" {...props} />,
  };

  return (
    <section>
      <h1 className="my-8 text-4xl font-bold">{frontmatter.title}</h1>
      <MDXRemote source={markdownContent} components={components} />
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
