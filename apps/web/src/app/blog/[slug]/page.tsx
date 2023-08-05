export default function Page({ params }: { params: { slug: string } }) {
  // const post = getPost(params.slug);
  // const { meta, default: Content } = post;

  return (
    <section>
      {/* <h1 className="my-8 text-4xl font-bold">{meta.title}</h1>       */}
      {/* <Content /> */}
    </section>
  );
}

// export async function generateStaticParams() {
//   const posts = getPosts();
//   return posts.map(({ meta }) => ({
//     slug: meta.slug,
//   }));
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const post = getPost(params.slug);
//   const { meta } = post;

//   return {
//     title: meta.title,
//     description: meta.description,
//   };
// }
