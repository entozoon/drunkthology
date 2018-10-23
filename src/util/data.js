import { slugify } from "./url";

export const getPageByName = (name, data) => {
  return data.pages && data.pages.filter(c => c.name === name)[0];
};

export const getPostBySlug = (slug, data) => {
  return data.posts.filter(p => {
    // i.e. post-name
    return slugify(p.title) === slug.replace(/^\/posts\//, "");
  })[0];
};
