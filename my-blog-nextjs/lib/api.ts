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

export function getBlogById(id: string) {
  const fullPath = join(blogDirectory, id);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const markDown: MarkDown = {
    ...data,
    content: content,
    id,
  };

  return markDown;
}

export function getAllBlogs() {
  const ids = fs.readdirSync(blogDirectory);
  const blogs = ids
    .map((id) => getBlogById(id))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return blogs;
}
