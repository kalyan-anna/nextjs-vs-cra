import React from 'react';
import { Meta } from '../components/Meta';
import { Link } from 'react-router-dom';

export const BlogLayout: React.FC<any> = ({ children }) => {
  return (
    <>
      <Meta />
      <header>
        <nav
          className="w-full py-4 border-b bg-sky-100"
          x-data="{ open: false }"
        >
          <Link
            to="/"
            className="hover:bg-gray-400 text-blue-800 rounded py-2 px-4 mx-2"
          >
            &larr; Home
          </Link>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};
