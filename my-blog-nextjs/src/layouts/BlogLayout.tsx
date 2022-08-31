import Link from 'next/link';
import React from 'react';

export const BlogLayout: React.FC<any> = ({ children }) => {
  return (
    <div>
      <header>
        <nav
          className="w-full py-4 border-b bg-sky-100"
          x-data="{ open: false }"
        >
          <Link href="/">
            <a className="hover:bg-gray-400 text-blue-800 rounded py-2 px-4 mx-2">
              &larr; Home
            </a>
          </Link>
        </nav>
      </header>
      <div>{children}</div>
    </div>
  );
};
