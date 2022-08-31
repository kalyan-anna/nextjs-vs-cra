import { NextPage } from 'next';
import React from 'react';
import { SiteLayout } from '../../layouts/SiteLayout';

type CategoryPageProps = {
  type: string;
};

const CategoryPage: NextPage<CategoryPageProps> = ({ type }) => {
  return (
    <SiteLayout>
      <section>
        <h1 className="pb-6 font-extrabold tracking-tight text-sky-800 text-6xl text-center">
          All {type} related blogs
        </h1>
        <p className="text-grey-600/25 text-lg my-10 text-center">
          Coming soon...
        </p>
      </section>
    </SiteLayout>
  );
};

export async function getStaticProps({ params }: any) {
  return {
    props: {
      type: params.type,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          type: 'accessibility',
        },
      },
      {
        params: {
          type: 'css',
        },
      },
      {
        params: {
          type: 'firebase',
        },
      },
      {
        params: {
          type: 'html',
        },
      },
      {
        params: {
          type: 'javascript',
        },
      },
      {
        params: {
          type: 'react',
        },
      },
    ],
    fallback: false,
  };
}

export default CategoryPage;
