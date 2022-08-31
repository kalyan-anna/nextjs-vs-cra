import type { NextPage } from 'next';
import Link from 'next/link';
import { getAllBlogs } from '../lib/api';
import { SiteLayout } from '../layouts/SiteLayout';
import { format } from 'date-fns';
import { BlogExcerpt } from '../components/BlogExcerpt';

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

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-pink-100 shadow-lg shadow-sky-800 mx-20 my-5">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            My Big Hero Component
          </h1>
          <p className="mb-8 leading-relaxed">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
            tousled. Chambray dreamcatcher trust fund, kitsch vice godard
            disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.
            Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan
            photo booth af fingerstache pitchfork.
          </p>
        </div>
      </div>
    </section>
  );
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
