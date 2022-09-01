import { SiteLayout } from '../layouts/SiteLayout';
import { BlogExcerpt } from '../components/BlogExcerpt';
import { Hero } from '../components/Hero';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [lastBlogs, setLastBlogs] = useState([]);

  useEffect(() => {
    fetch('/data/latest.json')
      .then((res) => res.json())
      .then((json) => setLastBlogs(json));
  }, []);

  return (
    <SiteLayout hero={<Hero />}>
      <h1 className="pb-6 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl md:text-5xl my-10">
        Latest
      </h1>
      <hr className="border-gray-500" />

      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {lastBlogs.length > 0 &&
          lastBlogs.map(({ title, excerpt, date, id }) => {
            return (
              <li key={id} className="py-12">
                <BlogExcerpt
                  title={title}
                  excerpt={excerpt}
                  date={date}
                  id={id}
                />
              </li>
            );
          })}
      </ul>
    </SiteLayout>
  );
};

export default HomePage;
