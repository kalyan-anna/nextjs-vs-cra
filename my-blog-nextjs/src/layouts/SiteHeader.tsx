import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

type SiteHeaderProps = {
  showTopicNav?: boolean;
};

export const SiteHeader: React.FC<SiteHeaderProps> = ({
  showTopicNav = true,
}) => {
  return (
    <>
      {/* <!-- Top Bar Nav --> */}
      <nav className="w-full py-4 bg-blue-800 shadow">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between">
          <nav>
            <ul className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
              <li>
                <Link href="/about" prefetch={false}>
                  <a className="hover:text-gray-200 hover:underline px-4">
                    About
                  </a>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center text-lg no-underline text-white pr-6">
            <a
              className=""
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              className="pl-6"
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              className="pl-6"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              className="pl-6"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </nav>

      {/* <!-- Text Header --> */}
      <header className="w-full container mx-auto border-b">
        <div className="flex flex-col items-center py-12">
          <Link href="/">
            <a className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl">
              My Blog - Next.JS
            </a>
          </Link>
          <p className="text-lg text-gray-600">Lorem Ipsum Dolor Sit Amet</p>
        </div>
      </header>

      {/* <!-- Topic Nav --> */}
      {showTopicNav && (
        <nav
          className="w-full py-4 border-b bg-gray-100"
          x-data="{ open: false }"
        >
          <div className="w-full flex-grow sm:flex sm:items-center sm:w-auto">
            <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
              <Link prefetch={false} href="/category/css">
                <a className="hover:bg-gray-400 rounded py-2 px-4 mx-2">CSS</a>
              </Link>
              <Link prefetch={false} href="/category/html">
                <a className="hover:bg-gray-400 rounded py-2 px-4 mx-2">HTML</a>
              </Link>
              <Link prefetch={false} href="/category/javascript">
                <a className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
                  JavaScript
                </a>
              </Link>
              <Link prefetch={false} href="/category/firebase">
                <a className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
                  Firebase
                </a>
              </Link>
              <Link prefetch={false} href="/category/react">
                <a className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
                  React
                </a>
              </Link>
              <Link prefetch={false} href="/category/accessibility">
                <a className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
                  Accessibility
                </a>
              </Link>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};
