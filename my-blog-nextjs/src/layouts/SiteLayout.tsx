import React from 'react';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

export const SiteLayout: React.FC<any> = ({ children }) => {
  return (
    <>
      <SiteHeader />
      <div className="min-h-screen">
        <section className="text-gray-600 body-font bg-pink-100 shadow-lg shadow-sky-800 mx-20 my-5">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                My Big Hero Component
              </h1>
              <p className="mb-8 leading-relaxed">
                Meggings kinfolk echo park stumptown DIY, kale chips beard
                jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
                godard disrupt ramps hexagon mustache umami snackwave tilde
                chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui
                celiac mlkshk freegan photo booth af fingerstache pitchfork.
              </p>
            </div>
          </div>
        </section>
        <main className="container mx-auto flex flex-wrap py-6">
          {children}
        </main>
      </div>
      <SiteFooter />
    </>
  );
};
