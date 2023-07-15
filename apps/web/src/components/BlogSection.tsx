import { posts } from "@/content";

export function BlogSection() {
  return (
    <div className="py-4 bg-white sm:py-8">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            words
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">read them</p>
        </div>
        <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-16 auto-rows-fr sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.meta.slug}
              className="relative flex flex-col justify-end px-8 pb-8 overflow-hidden bg-gray-900 isolate rounded-2xl pt-80 sm:pt-48 lg:pt-80"
            >
              <img
                src=""
                alt=""
                className="absolute inset-0 object-cover w-full h-full -z-10"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center overflow-hidden text-sm leading-6 text-gray-300 gap-y-1">
                <time dateTime={post.meta.date} className="mr-8">
                  {post.meta.date}
                </time>
                <div className="flex items-center -ml-4 gap-x-4">
                  <svg
                    viewBox="0 0 2 2"
                    className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="flex gap-x-2.5">
                    <img
                      src=""
                      alt=""
                      className="flex-none w-6 h-6 rounded-full bg-white/10"
                    />
                    Dev Wells
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href={`/blog/${post.meta.slug}`}>
                  <span className="absolute inset-0" />
                  {post.meta.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
