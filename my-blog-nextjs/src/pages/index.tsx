import type { NextPage } from 'next';
import Link from 'next/link';
import { getAllBlogs } from '../../lib/api';
import { SiteLayout } from '../layouts/SiteLayout';
import { format } from 'date-fns';

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
        {blogs.map(({ title, excerpt, date, id }) => {
          return (
            <li key={id} className="py-12">
              <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>
                        {format(new Date(date), 'dd/MM/yyyy')}
                      </time>
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <Link
                            href={`/blog/${id}`}
                            className="text-gray-900 dark:text-gray-100"
                          >
                            {title}
                          </Link>
                        </h2>
                      </div>
                      <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                        {excerpt}
                      </div>
                    </div>
                    <div className="text-base font-medium leading-6">
                      <Link
                        href={`/blog/${id}`}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Read "${title}"`}
                      >
                        Read more &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
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
