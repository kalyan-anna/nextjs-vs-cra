import type { NextPage } from 'next';
import { getAllBlogs } from '../lib/api';
import { SiteLayout } from '../layouts/SiteLayout';
import { BlogExcerpt } from '../components/BlogExcerpt';
import { Hero } from '../components/Hero';

type HomePageProps = {
  blogs: [
    {
      content: string;
      title: string;
      excerpt: string;
      date: string;
      id: string;
    }
  ];
};

const HomePage: NextPage<HomePageProps> = ({ blogs }) => {
  return (
    <SiteLayout hero={<Hero />}>
      <h1 className="pb-6 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl md:text-5xl my-10">
        Latest
      </h1>
      <hr className="border-gray-500" />

      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {blogs.map(({ title, excerpt, date, id }, index) => {
          return (
            <li key={id} className="py-12">
              <BlogExcerpt
                title={title}
                excerpt={excerpt}
                date={date}
                id={id}
                prefetch={index === 0}
              />
            </li>
          );
        })}
      </ul>
    </SiteLayout>
  );
};

export async function getStaticProps() {
  const blogs = getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
}

export default HomePage;
