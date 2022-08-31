import React from 'react';
import { Link } from 'react-router-dom';

export const SiteFooter = () => {
  return (
    <footer className="w-full border-t bg-sky-50 pb-12">
      <div className="w-full container mx-auto flex flex-col items-center">
        <div className="flex flex-col md:flex-row text-center md:text-left md:justify-between py-6">
          <Link to="/about" className="uppercase px-3">
            About Us
          </Link>
          <Link to="/privacy-policy" className="uppercase px-3">
            Privacy Policy
          </Link>
          <a
            href="http://fitnik.tech/public/docs/terms.pdf"
            className="uppercase px-3"
            target="_blank"
            rel="noreferrer"
          >
            Terms & Conditions
          </a>
          <Link to="/contact-us" className="uppercase px-3">
            Contact Us
          </Link>
        </div>
        <div className="uppercase pb-6">&copy; myblog.com</div>
      </div>
    </footer>
  );
};
