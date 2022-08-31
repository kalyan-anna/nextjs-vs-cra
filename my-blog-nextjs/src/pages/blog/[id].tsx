import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { getAllBlogs, getBlogById } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import { BlogBody } from '../../components/BlogBody';
import { BlogHeader } from '../../components/BlogHeader';
import { BlogLayout } from '../../layouts/BlogLayout';

type BlogPageProps = {
  content: string;
  title: string;
  excerpt: string;
  date: string;
  id: string;
};

const BlogPage: NextPage<BlogPageProps> = ({ content, title, date }) => {
  return (
    <BlogLayout>
      <article className="mb-32">
        <Head>
          <title>{`${title} | Next.js Blog`}</title>
        </Head>
        <BlogHeader title={title} date={date} />
        <BlogBody content={content} />
      </article>
    </BlogLayout>
  );
};

export async function getStaticProps({ params }: any) {
  const blog = getBlogById(params.id);
  const contentHTML = await markdownToHtml(blog.content || '');

  return {
    props: {
      ...blog,
      content: contentHTML,
    },
  };
}

export async function getStaticPaths() {
  const blogs = getAllBlogs();

  return {
    paths: blogs.map((blog) => ({
      params: {
        id: blog.id,
      },
    })),
    fallback: false,
  };
}

export default BlogPage;
