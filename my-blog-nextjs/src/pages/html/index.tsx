import React from 'react';
import { SiteLayout } from '../../layouts/SiteLayout';

const CSSPage = () => {
  return (
    <SiteLayout>
      <section>
        <h1 className="pb-6 font-extrabold tracking-tight text-sky-800 text-6xl text-center">
          All HTML things
        </h1>
        <p className="text-grey-600/25 text-lg my-10 text-center">Coming soon...</p>
      </section>
    </SiteLayout>
  );
};

export default CSSPage;
