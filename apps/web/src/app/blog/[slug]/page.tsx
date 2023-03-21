import { posts } from "@/content";

function getPost(slug: string) {
  const post = posts.find((post) => post.meta.slug === slug);

  if (!post) {
    throw new Error(`Post not found: ${slug}`);
  }

  return post;
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  const { meta, default: Content } = post;

  return (
    <section>
      <h1 className="text-5xl font-bold my-8">{meta.title}</h1>
      <Content />
    </section>
  );
}

export async function generateStaticParams() {
  return posts.map(({ meta }) => ({
    slug: meta.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);
  const { meta } = post;

  return {
    title: meta.title,
    description: meta.description,
  };
}
