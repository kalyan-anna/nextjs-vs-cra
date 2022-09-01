import React from 'react';
import { getPrivacyPolicy } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import { SiteLayout } from '../../layouts/SiteLayout';
import { NextPage } from 'next';

type PrivacyPolicyPageProps = {
  content: string;
};

const PrivacyPolicyPage: NextPage<PrivacyPolicyPageProps> = ({ content }) => {
  return (
    <SiteLayout showTopicNav={false}>
      <section className="text-gray-600 body-font">
        <h1 className="pb-6 font-extrabold tracking-tight text-sky-800 text-6xl text-center">
          Privacy Policy
        </h1>
        <div
          className="container px-5 py-24 mx-auto"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </section>
    </SiteLayout>
  );
};

export async function getStaticProps() {
  const content = getPrivacyPolicy();
  const contentHTML = await markdownToHtml(content);

  return {
    props: {
      content: contentHTML,
    },
  };
}

export default PrivacyPolicyPage;
