import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { BlogBody } from '../components/BlogBody';
import { BlogHeader } from '../components/BlogHeader';
import { BlogLayout } from '../layouts/BlogLayout';
import { extractMetaData } from '../utils/extractMetaData';

const BlogPage = () => {
  const { id } = useParams();
  const [markdown, setMarkdown] = useState('');
  const [metaData, setMetaData] = useState({} as any);

  useEffect(() => {
    fetch(`/data/_blog/${id}.md`)
      .then(async (res) => {
        // console.log(await res.json());
        return res.text();
      })
      .then((text) => {
        const [rawMeta, metaData] = extractMetaData(text);
        setMetaData(metaData);
        setMarkdown(text.replace(rawMeta[0], ''));
      });
  }, [id]);

  console.log('metaData:', metaData);
  
  return (
    <BlogLayout>
      <article className="mb-32">
        <Helmet>
          <title>{`${metaData.title} | Next.js Blog`}</title>
        </Helmet>
        <BlogHeader title={metaData.title} date={metaData.date} />
        <BlogBody content={markdown} />
      </article>
    </BlogLayout>
  );
};

export default BlogPage;
