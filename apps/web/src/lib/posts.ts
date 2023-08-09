export function getPost(slug: string) {
  return null;
}

export async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/posts`);

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}
