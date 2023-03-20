import type { MDXComponents } from "mdx/types";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="text-7xl font-bold" {...props} />,
    h2: (props) => <h2 className="text-5xl font-bold" {...props} />,
    h3: (props) => <h3 className="text-3xl font-bold" {...props} />,
    ...components,
  };
}
