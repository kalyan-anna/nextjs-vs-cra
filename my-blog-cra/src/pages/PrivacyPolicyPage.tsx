import React, { useEffect, useState } from 'react';
import { SiteLayout } from '../layouts/SiteLayout';
import styles from './PrivacyPolicyPage.module.scss';
import ReactMarkdown from 'react-markdown';
import cx from 'classnames';

const PrivacyPolicyPage = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('/data/privacy-policy.md')
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  console.log('markdiown:', markdown);

  return (
    <SiteLayout showTopicNav={false}>
      <section className="text-gray-600 body-font">
        <h1 className="pb-6 font-extrabold tracking-tight text-sky-800 text-6xl text-center">
          Privacy Policy
        </h1>
        <ReactMarkdown
          children={markdown}
          className={cx('container px-5 py-24 mx-auto', styles['markdown'])}
        />
      </section>
    </SiteLayout>
  );
};

export default PrivacyPolicyPage;
