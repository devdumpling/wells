/**
 * This file is used to declare the types of the MDX files
 * 
 * It is somewhat legacy in that most of the actual content is now pulled from github,
 * however it's still possible to declare mdx files locally, and this will type it.
 */
declare module "*.mdx" {
  export const meta: {
    title: string;
    slug: string;
    description?: string;
    date?: string;
    hero_img_url?: string;
  };
}
