import { getPost, getPosts } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import type { Metadata } from "next";

// Rebuilds the page every 10 hours
// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
export const revalidate = 36000;

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  const { frontmatter, markdownContent } = post;

  const components = {
    h1: (props: any) => <h1 className="my-4 text-4xl font-bold" {...props} />,
    h2: (props: any) => <h2 className="my-4 text-2xl font-bold" {...props} />,
    h3: (props: any) => <h3 className="my-4 text-xl font-bold" {...props} />,
    p: (props: any) => <p className="my-4" {...props} />,
    img: (props: any) => {
      let src = props.src as string;
      const isImageAboveTheFold = props.alt === frontmatter.imgAboveFold;

      if (src.startsWith("/")) {
        src = `${process.env.NEXT_PUBLIC_DOMAIN}${props.src}`;
      }

      return (
        <Image
          priority={isImageAboveTheFold}
          width={768}
          height={512}
          alt={props.alt ? props.alt : "Unknown image"}
          src={src}
        />
      );
    },
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
}): Promise<Metadata> {
  const post = await getPost(params.slug);
  const { frontmatter } = post;

  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}
