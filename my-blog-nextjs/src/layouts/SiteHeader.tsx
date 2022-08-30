import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

export const SiteHeader = () => {
  return (
    <>
      {/* <!-- Top Bar Nav --> */}
      <nav className="w-full py-4 bg-blue-800 shadow">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between">
          <nav>
            <ul className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
              <li>
                <a
                  className="hover:text-gray-200 hover:underline px-4"
                  href="#"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-200 hover:underline px-4"
                  href="#"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center text-lg no-underline text-white pr-6">
            <a className="" href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a className="pl-6" href="https://twitter.com/">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a className="pl-6" href="https://www.instagram.com/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="pl-6" href="https://www.linkedin.com/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </nav>
      
      {/* <!-- Text Header --> */}
    <header className="w-full container mx-auto">
        <div className="flex flex-col items-center py-12">
            <a className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl" href="#">
                My Blog - Next.JS
            </a>
            <p className="text-lg text-gray-600">
                Lorem Ipsum Dolor Sit Amet
            </p>
        </div>
    </header>

    {/* <!-- Topic Nav --> */}
    <nav className="w-full py-4 border-t border-b bg-gray-100" x-data="{ open: false }">

        <div className="w-full flex-grow sm:flex sm:items-center sm:w-auto">
            <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
                <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">CSS</a>
                <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">HTML</a>
                <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">JavaScript</a>
                <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Firebase</a>
                <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">React</a>
                <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Accessibility</a>
            </div>
        </div>
    </nav>
    </>
  );
};
