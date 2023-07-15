declare module "*.mdx" {
  export const meta: {
    title: string;
    slug: string;
    description?: string;
    date?: string;
    hero_img_url?: string;
  };
}
