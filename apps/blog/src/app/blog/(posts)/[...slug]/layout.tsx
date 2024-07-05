import type { Metadata } from "next";

type BlogMetadataProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: BlogMetadataProps): Promise<Metadata> {
  const slug = params.slug;

  console;

  return {
    title: `wells.dev - ${slug}`,
  };
}

export default function BlogWildcardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
