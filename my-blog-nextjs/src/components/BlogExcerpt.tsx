import { format } from 'date-fns';
import Link from 'next/link';
import React from 'react';

type BlogExcerptProps = {
  date: string;
  title: string;
  id: string;
  excerpt: string;
  prefetch?: boolean;
};

export const BlogExcerpt: React.FC<BlogExcerptProps> = ({
  date,
  title,
  id,
  excerpt,
  prefetch = false,
}) => {
  return (
    <article>
      <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
        <dl>
          <dt className="sr-only">Published on</dt>
          <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
            <time dateTime={date}>{format(new Date(date), 'dd/MM/yyyy')}</time>
          </dd>
        </dl>
        <div className="space-y-5 xl:col-span-3">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold leading-8 tracking-tight">
                <Link
                  href={`/blog/${id}`}
                  className="text-gray-900 dark:text-gray-100"
                  prefetch={prefetch}
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
            <Link href={`/blog/${id}`} prefetch={prefetch}>
              <a
                className="text-indigo-500 hover:text-indigo-600 "
                aria-label={`Read "${title}"`}
              >
                Read more &rarr;
              </a>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
