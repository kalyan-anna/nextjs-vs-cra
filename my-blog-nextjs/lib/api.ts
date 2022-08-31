import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const dataDirectory = join(process.cwd(), 'data');
const blogDirectory = join(process.cwd(), 'data/_blog');

type MarkDown = {
  [key: string]: string;
};

export function getPrivacyPolicy() {
  const fullPath = join(dataDirectory, 'privacy-policy.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content } = matter(fileContents);
  return content;
}

export function getBlogBySlug(slug: string) {
  const fullPath = join(blogDirectory, slug);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const markDown: MarkDown = {
    ...data,
    content: content,
    id: slug,
  };

  // markDown.
  // // Ensure only the minimal needed data is exposed
  // fields.forEach((field) => {
  //   if (field === 'slug') {
  //     items[field] = realSlug
  //   }
  //   if (field === 'content') {
  //     items[field] = content
  //   }

  //   if (typeof data[field] !== 'undefined') {
  //     items[field] = data[field]
  //   }
  // })

  return markDown;
}

export function getAllBlogs() {
  const slugs = fs.readdirSync(blogDirectory);
  const blogs = slugs
    .map((slug) => getBlogBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return blogs;
}
