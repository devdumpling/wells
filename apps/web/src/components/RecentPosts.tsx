import { posts } from "@/content";

export function RecentPosts() {
  const recentPosts = posts.slice(0, 3);

  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="grid gap-16 pt-3 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
        {recentPosts.map((post) => (
          <div key={post.meta.slug}>
            {post.meta.hero_img_url && (
              <div className="h-48 mb-3 overflow-hidden rounded-lg">
                <img
                  src={post.meta.hero_img_url}
                  alt={post.meta.title}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
            <div>
              <h3 className="mt-2 text-xl font-semibold leading-7 text-gray-900">
                {post.meta.title}
              </h3>
              <p className="mt-3 text-base text-gray-500">
                {post.meta.description}
              </p>
              <div className="mt-3">
                <a
                  href={`/blog/${post.meta.slug}`}
                  className="text-base font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Read full post
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
